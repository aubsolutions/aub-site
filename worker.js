const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' };
const RECIPIENT = 'u.assylbekov@gmail.com';
const SENDER = 'website@aub-solutions.asia';

const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
const clean = (value, max) => String(value || '').trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').slice(0, max);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== '/api/contact') return env.ASSETS.fetch(request);
    if (request.method !== 'POST') return json({ ok: false, code: 'method_not_allowed' }, 405);
    if (!request.headers.get('content-type')?.includes('application/json')) return json({ ok: false, code: 'invalid_content_type' }, 415);
    if (Number(request.headers.get('content-length') || 0) > 16_384) return json({ ok: false, code: 'payload_too_large' }, 413);

    let body;
    try { body = await request.json(); } catch { return json({ ok: false, code: 'invalid_json' }, 400); }
    if (body.website) return json({ ok: true });

    const name = clean(body.name, 100);
    const contact = clean(body.contact, 160);
    const message = clean(body.message, 3000);
    const language = ['ru', 'kk', 'en'].includes(body.language) ? body.language : 'ru';
    if (name.length < 2 || contact.length < 3 || message.length < 5) return json({ ok: false, code: 'invalid_fields' }, 422);
    if (!env.CONTACT_EMAIL) return json({ ok: false, code: 'email_not_configured' }, 503);

    const text = [`Новая заявка с сайта AUB Solutions`, ``, `Имя: ${name}`, `Контакт: ${contact}`, `Язык сайта: ${language.toUpperCase()}`, ``, `Задача:`, message, ``, `Страница: ${request.headers.get('referer') || 'aub-solutions.asia'}`].join('\n');
    const email = { to: RECIPIENT, from: SENDER, subject: `Заявка с сайта — ${name}`, text };
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) email.replyTo = contact;

    try { await env.CONTACT_EMAIL.send(email); return json({ ok: true }); }
    catch (error) { console.error('Contact email failed', error?.code || error?.message || error); return json({ ok: false, code: 'send_failed' }, 502); }
  }
};

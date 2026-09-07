const toggle = document.querySelector('.menu-button');
const nav = document.querySelector('.menu');
const dialog = document.querySelector('#contact-dialog');
const contactForm = document.querySelector('#contact-form');

const copy = {
  ru: {
    nav: ['Главная', 'О компании', 'Решения', 'Проекты', 'Технологии', 'Контакты'], contact: 'Связаться с нами', heroOverline: 'ТЕХНОЛОГИИ. ЛЮДИ. РЕЗУЛЬТАТЫ.',
    heroTitle: 'Разрабатываем<br>IT-решения,<br>которые работают', heroText: 'AUB Solutions — команда разработчиков, создающая современные веб-системы, мобильные приложения и корпоративные решения для бизнеса и государственных организаций.', discuss: 'Обсудить проект', watch: 'Смотреть проекты',
    values: ['БОЛЬШЕ<br>ЧЕМ ТЕХНОЛОГИИ', 'НАДЕЖНОЕ<br>ПАРТНЕРСТВО', 'РЕАЛЬНЫЕ<br>РЕЗУЛЬТАТЫ'], quote: '«Технологии должны упрощать жизнь и создавать новые возможности»',
    serviceTitles: ['Веб-системы', 'Мобильные приложения', 'Интеграции и API', 'Техническая поддержка'], serviceTexts: ['Корпоративные порталы, информационные системы, автоматизация процессов', 'iOS и Android приложения под задачи бизнеса', 'Интеграция с государственными и сторонними системами', 'Сопровождение, развитие и масштабирование решений'],
    projectsOverline: 'НАШИ ПРОЕКТЫ', projectsTitle: 'Реальные решения для реальных задач', projectTypes: ['Система автоматизации торговли', 'Интернет-магазин и каталог', 'Мобильное приложение'], projectTexts: ['Комплексное решение для управления розничной и оптовой торговлей: web-админка, POS, мобильное приложение, учёт, аналитика, ЭСФ и интеграции.', 'Современная e-commerce платформа с удобным каталогом, корзиной, онлайн-заказами, мультиязычностью и интеграциями с WhatsApp и системами учёта.', 'Мобильное приложение для заметок и организации информации. Удобный, быстрый и современный инструмент для повседневных задач.'],
    techTitle: 'Технологии, с которыми мы работаем', enterpriseOverline: 'ОПЫТ И КОМПЕТЕНЦИИ', enterpriseTitle: 'Информационные системы<br>для крупных организаций', enterpriseText: 'Мы реализуем сложные IT-проекты в корпоративном и государственном секторах, включая автоматизацию бизнес-процессов, интеграции и разработку специализированных информационных систем. Имеем опыт работы с инфраструктурными организациями, в том числе в транспортной отрасли.', expertise: ['Анализ требований', 'Проектирование', 'Разработка и внедрение', 'Сопровождение'],
    contactTitle: 'Готовы обсудить ваш проект?', contactText: 'Оставьте заявку, и мы свяжемся с вами для обсуждения задач и предложим оптимальное решение.', footerTagline: 'Технологии. Люди. Результаты.', rights: 'Все права защищены.', footerEnd: 'Разработка. Внедрение. Поддержка.',
    formOverline: 'ОБРАТНАЯ СВЯЗЬ', formTitle: 'Расскажите о вашем проекте', formIntro: 'Заполните поля — заявка будет отправлена нашей команде.', formLabels: ['Ваше имя', 'Телефон или email', 'Кратко о задаче'], formSubmit: 'Отправить заявку', close: 'Закрыть', sending: 'Отправляем заявку…', success: 'Спасибо! Заявка отправлена. Мы свяжемся с вами.', error: 'Не удалось отправить заявку. Попробуйте ещё раз или напишите нам на email.', fallback: 'Почтовая отправка ещё настраивается. Открываем готовое письмо…', subject: 'Новая заявка с сайта AUB Solutions', mailFields: ['Имя', 'Контакт', 'Задача']
  },
  kk: {
    nav: ['Басты бет', 'Компания туралы', 'Шешімдер', 'Жобалар', 'Технологиялар', 'Байланыс'], contact: 'Бізбен байланысу', heroOverline: 'ТЕХНОЛОГИЯЛАР. АДАМДАР. НӘТИЖЕЛЕР.',
    heroTitle: 'Нәтиже беретін<br>IT-шешімдерді<br>әзірлейміз', heroText: 'AUB Solutions — бизнес пен мемлекеттік ұйымдарға арналған заманауи веб-жүйелерді, мобильді қосымшаларды және корпоративтік шешімдерді әзірлейтін команда.', discuss: 'Жобаны талқылау', watch: 'Жобаларды көру',
    values: ['ТЕК ТЕХНОЛОГИЯДАН<br>ДА КӨП', 'СЕНІМДІ<br>СЕРІКТЕСТІК', 'НАҚТЫ<br>НӘТИЖЕЛЕР'], quote: '«Технологиялар өмірді жеңілдетіп, жаңа мүмкіндіктер ашуы тиіс»',
    serviceTitles: ['Веб-жүйелер', 'Мобильді қосымшалар', 'Интеграциялар және API', 'Техникалық қолдау'], serviceTexts: ['Корпоративтік порталдар, ақпараттық жүйелер, процестерді автоматтандыру', 'Бизнес міндеттеріне арналған iOS және Android қосымшалары', 'Мемлекеттік және сыртқы жүйелермен интеграция', 'Шешімдерді сүйемелдеу, дамыту және масштабтау'],
    projectsOverline: 'БІЗДІҢ ЖОБАЛАР', projectsTitle: 'Нақты міндеттерге арналған нақты шешімдер', projectTypes: ['Сауданы автоматтандыру жүйесі', 'Интернет-дүкен және каталог', 'Мобильді қосымша'], projectTexts: ['Бөлшек және көтерме сауданы басқаруға арналған кешенді шешім: веб-әкімшілік, POS, мобильді қосымша, есеп, аналитика, ЭШФ және интеграциялар.', 'Ыңғайлы каталогы, себеті, онлайн тапсырыстары, көптілділігі, WhatsApp және есеп жүйелерімен интеграциясы бар e-commerce платформасы.', 'Жазбалар мен ақпаратты ұйымдастыруға арналған мобильді қосымша. Күнделікті міндеттерге ыңғайлы, жылдам және заманауи құрал.'],
    techTitle: 'Біз қолданатын технологиялар', enterpriseOverline: 'ТӘЖІРИБЕ ЖӘНЕ ҚҰЗЫРЕТТЕР', enterpriseTitle: 'Ірі ұйымдарға арналған<br>ақпараттық жүйелер', enterpriseText: 'Біз корпоративтік және мемлекеттік секторларда бизнес-процестерді автоматтандыруды, интеграцияларды және мамандандырылған ақпараттық жүйелерді әзірлеуді қамтитын күрделі IT-жобаларды жүзеге асырамыз. Инфрақұрылымдық ұйымдармен, соның ішінде көлік саласында жұмыс тәжірибеміз бар.', expertise: ['Талаптарды талдау', 'Жобалау', 'Әзірлеу және енгізу', 'Сүйемелдеу'],
    contactTitle: 'Жобаңызды талқылауға дайынсыз ба?', contactText: 'Өтінім қалдырыңыз — біз міндеттерді талқылау үшін хабарласып, оңтайлы шешім ұсынамыз.', footerTagline: 'Технологиялар. Адамдар. Нәтижелер.', rights: 'Барлық құқықтар қорғалған.', footerEnd: 'Әзірлеу. Енгізу. Қолдау.',
    formOverline: 'КЕРІ БАЙЛАНЫС', formTitle: 'Жобаңыз туралы айтып беріңіз', formIntro: 'Жолдарды толтырыңыз — өтінім біздің командаға жіберіледі.', formLabels: ['Атыңыз', 'Телефон немесе email', 'Міндет туралы қысқаша'], formSubmit: 'Өтінім жіберу', close: 'Жабу', sending: 'Өтінім жіберілуде…', success: 'Рақмет! Өтінім жіберілді. Біз сізбен хабарласамыз.', error: 'Өтінімді жіберу мүмкін болмады. Қайта көріңіз немесе бізге email жазыңыз.', fallback: 'Пошта арқылы жіберу әлі реттелуде. Дайын хатты ашып жатырмыз…', subject: 'AUB Solutions сайтынан жаңа өтінім', mailFields: ['Аты', 'Байланыс', 'Міндет']
  },
  en: {
    nav: ['Home', 'About', 'Solutions', 'Projects', 'Technologies', 'Contact'], contact: 'Contact us', heroOverline: 'TECHNOLOGY. PEOPLE. RESULTS.', heroTitle: 'We build<br>IT solutions<br>that work', heroText: 'AUB Solutions is a development team creating modern web systems, mobile applications and enterprise solutions for businesses and public-sector organizations.', discuss: 'Discuss a project', watch: 'View projects',
    values: ['MORE THAN<br>TECHNOLOGY', 'RELIABLE<br>PARTNERSHIP', 'TANGIBLE<br>RESULTS'], quote: '“Technology should simplify life and create new opportunities”', serviceTitles: ['Web systems', 'Mobile applications', 'Integrations and APIs', 'Technical support'], serviceTexts: ['Corporate portals, information systems and process automation', 'iOS and Android applications tailored to business needs', 'Integration with government and third-party systems', 'Maintenance, development and scaling of solutions'],
    projectsOverline: 'OUR PROJECTS', projectsTitle: 'Real solutions for real challenges', projectTypes: ['Retail automation system', 'Online store and catalogue', 'Mobile application'], projectTexts: ['A comprehensive solution for retail and wholesale management: web administration, POS, mobile application, accounting, analytics, e-invoicing and integrations.', 'A modern e-commerce platform with a convenient catalogue, cart, online ordering, multilingual support and integrations with WhatsApp and accounting systems.', 'A mobile application for notes and organizing information. A convenient, fast and modern tool for everyday tasks.'],
    techTitle: 'Technologies we work with', enterpriseOverline: 'EXPERIENCE AND EXPERTISE', enterpriseTitle: 'Information systems<br>for large organizations', enterpriseText: 'We deliver complex IT projects in corporate and public sectors, including business-process automation, integrations and specialized information systems. Our experience includes work with infrastructure organizations, including the transport sector.', expertise: ['Requirements analysis', 'Solution design', 'Development and implementation', 'Ongoing support'],
    contactTitle: 'Ready to discuss your project?', contactText: 'Send a request and we will contact you to discuss the task and propose the right solution.', footerTagline: 'Technology. People. Results.', rights: 'All rights reserved.', footerEnd: 'Development. Implementation. Support.', formOverline: 'GET IN TOUCH', formTitle: 'Tell us about your project', formIntro: 'Complete the fields and your request will be sent to our team.', formLabels: ['Your name', 'Phone or email', 'Briefly describe the task'], formSubmit: 'Send request', close: 'Close', sending: 'Sending your request…', success: 'Thank you! Your request has been sent. We will contact you.', error: 'We could not send your request. Please try again or email us.', fallback: 'Direct delivery is still being configured. Opening a prepared email…', subject: 'New enquiry from the AUB Solutions website', mailFields: ['Name', 'Contact', 'Task']
  }
};

const setText = (selector, value, html = false) => { const el = document.querySelector(selector); if (el) el[html ? 'innerHTML' : 'textContent'] = value; };
const setList = (selector, values, html = false) => document.querySelectorAll(selector).forEach((el, index) => { if (values[index] !== undefined) el[html ? 'innerHTML' : 'textContent'] = values[index]; });

function applyLanguage(language) {
  const t = copy[language] || copy.ru;
  document.documentElement.lang = language === 'kk' ? 'kk' : language;
  setList('.menu a', t.nav); setList('.open-contact', [`${t.contact} <b>→</b>`, `${t.discuss} <b>→</b>`, `${t.contact} <b>→</b>`], true);
  setText('.hero .overline', t.heroOverline); setText('.hero h1', t.heroTitle, true); setText('.hero-copy > p:not(.overline)', t.heroText); setText('.watch-link', `<span>▷</span> ${t.watch}`, true); setList('.hero-values p', t.values, true); setText('.hero blockquote', t.quote);
  setList('.solution-grid h2', t.serviceTitles); setList('.solution-grid article > p', t.serviceTexts); setText('.projects .overline', t.projectsOverline); setText('.projects .section-heading h2', t.projectsTitle); setList('.project-card header p', t.projectTypes); setList('.project-copy > p', t.projectTexts);
  setText('.tech-heading h2', t.techTitle); setText('.enterprise .overline', t.enterpriseOverline); setText('.enterprise h2', t.enterpriseTitle, true); setText('.enterprise-copy > p:not(.overline)', t.enterpriseText); setList('.enterprise li', t.expertise.map((item, index) => `<span>${['◇','□','♢','◈'][index]}</span> ${item}`), true);
  setText('.contact h2', t.contactTitle); setText('.contact p', t.contactText); setText('.footer-main > p', t.footerTagline); setList('.footer-main nav a', t.nav); setText('.copyright > span:first-child', `© ${new Date().getFullYear()} AUB Solutions. ${t.rights}`); setText('.copyright > span:last-child', t.footerEnd);
  setText('.contact-form .overline', t.formOverline); setText('#contact-dialog-title', t.formTitle); setText('.form-intro', t.formIntro); setList('.contact-form label > span', t.formLabels); setText('.form-submit', `${t.formSubmit} <b>→</b>`, true); document.querySelector('.dialog-close')?.setAttribute('aria-label', t.close);
  document.querySelectorAll('[data-lang]').forEach((button) => { const active = button.dataset.lang === language; button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active)); }); localStorage.setItem('aub-language', language);
}

toggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); toggle?.setAttribute('aria-expanded', 'false'); }));
document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
document.querySelectorAll('.open-contact').forEach((button) => button.addEventListener('click', () => dialog?.showModal()));
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
contactForm?.addEventListener('submit', async (event) => {
  event.preventDefault(); if (!contactForm.reportValidity()) return;
  const language = localStorage.getItem('aub-language') || 'ru'; const t = copy[language] || copy.ru; const data = new FormData(contactForm);
  const payload = { name: data.get('name'), contact: data.get('contact'), message: data.get('message'), website: data.get('website'), language };
  const submitButton = contactForm.querySelector('.form-submit'); submitButton.disabled = true; setText('.form-status', t.sending);
  try {
    const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(payload) });
    const result = await response.json().catch(() => ({}));
    if (response.ok) { contactForm.reset(); setText('.form-status', t.success); return; }
    if (response.status === 503 && result.code === 'email_not_configured') {
      const body = `${t.mailFields[0]}: ${payload.name}\n${t.mailFields[1]}: ${payload.contact}\n\n${t.mailFields[2]}:\n${payload.message}`;
      setText('.form-status', t.fallback); window.location.href = `mailto:u.assylbekov@gmail.com?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(body)}`; return;
    }
    setText('.form-status', t.error);
  } catch { setText('.form-status', t.error); }
  finally { submitButton.disabled = false; }
});
document.querySelector('#year').textContent = new Date().getFullYear();
applyLanguage(localStorage.getItem('aub-language') || 'ru');

# AUB Solutions

Сайт-портфолио AUB Solutions. Публичные файлы находятся в `public/`, а `worker.js` обрабатывает заявки с контактной формы.

## Локальный запуск

```bash
npm run start
```

## Cloudflare Workers

Проект разворачивается командой `npx wrangler deploy`. Статические файлы публикуются из `public/`, настройки находятся в `wrangler.jsonc`.

Для прямой отправки заявок нужно подключить домен `aub-solutions.asia` в Cloudflare Email Service, подтвердить адрес назначения `u.assylbekov@gmail.com` и добавить к Worker email binding `CONTACT_EMAIL` с этим адресом назначения.

## Скриншоты проектов

В сайт уже добавлены реальные экраны SaudaPro и DalaDami в `assets/projects/`. Для Enote пока сохранено нейтральное место без выдуманного интерфейса.

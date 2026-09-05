# AUB Solutions

Статический сайт-портфолио AUB Solutions. Не требует сборки.

## Локальный запуск

```bash
npm run start
```

## Cloudflare Pages

1. Отправьте файлы этого проекта в репозиторий `https://github.com/aubsolutions/aub-site.git`.
2. В Cloudflare откройте **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Выберите репозиторий. Для статического сайта укажите:
   - Framework preset: `None`
   - Build command: оставьте пустым
   - Build output directory: `.`
4. После первого deploy откройте **Custom domains** и добавьте `aub-solutions.asia` и, при необходимости, `www.aub-solutions.asia`.

## Скриншоты проектов

В сайт уже добавлены реальные экраны SaudaPro и DalaDami в `assets/projects/`. Для Enote пока сохранено нейтральное место без выдуманного интерфейса.

https://github.com/feature-sliced/steiger
npx steiger ./src
Для запуска в режиме наблюдения добавьте -w/ --watch к команде:

npx steiger ./src --watch

FSDX
Команда Псевдоним Описание Параметры
init i Инициализируйте начальную конфигурацию FSD. -y, --yes
generate g Сгенерируйте структуру FSD. -t, --template
examples e Показать примеры использования доступных команд.

Biome
npx @biomejs/biome lint ./src - отобразит ошибки в консоли
npx @biomejs/biome lint --write ./src  флаг --write исправит некоторые ошибки

Docker
docker compose build - создать образ
docker compose down - останавливает контейнеры и удаляет их
docker rmi bouncing_balls_frontend - удалить образ по имени образа
docker compose up -d - запустить сборку контейнера в detached mode
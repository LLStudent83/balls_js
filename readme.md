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

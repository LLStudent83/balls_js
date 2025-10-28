# Шпаргалка Tailwind CSS v4
Версия: v4.1 (апрель 2025)  
**Новые в v4**: Отмечены **жирным**.  
Сайт: [tailwindcss.com/docs](https://tailwindcss.com/docs)  

## 1. Layout (Разметка)
- `container`: Центрирует с max-width по breakpoints.
- `flex`: `display: flex`.
- `grid`: `display: grid`.
- `block` / `inline` / `inline-block`: Display modes.
- **@container**: Устанавливает контейнер для container queries.
- **@min-* / @max-***: Варианты для container queries (напр. `@min-sm:flex`).
- **grid-cols-{n}**: Колонки в grid (динамич. напр. `grid-cols-15`).
- `col-span-{n}` / `row-span-{n}`: Занимает колонки/строки.
- `gap-{size}` / `space-x-{size}` / **space-y-{size}**: Отступы между элементами.
- `justify-{start/center/end/between/around}` / `items-{start/center/end/baseline/stretch}`: Выравнивание в flex/grid.
- **items-baseline-last** / **self-baseline-last**: Выравнивание по baseline текста.
- **justify-center-safe** (и другие *-safe): Безопасное выравнивание без overflow.
- `order-{n}`: Порядок в flex/grid.

## 2. Spacing (Отступы и размеры)
- `p-{size}` / `px-{size}` / `py-{size}`: Padding.
- `m-{size}` / `mx-{size}` / `my-{size}`: Margin (динамич. напр. `mt-29`).
- `w-{size}` / `h-{size}`: Width/Height (напр. `w-full`, `h-screen`).
- `max-w-{size}` / `min-w-{size}`: Max/Min width.
- **field-sizing**: Авто-размер textarea по содержимому (напр. `field-sizing-auto`).
- `aspect-{ratio}`: Соотношение сторон (напр. `aspect-square`).

## 3. Typography (Типографика)
- `font-{size}` (напр. `text-sm`): Размер шрифта.
- `font-{weight}` (напр. `font-bold`): Толщина.
- `leading-{size}`: Межстрочный интервал.
- `text-{color}`: Цвет текста (напр. `text-blue-500`).
- `uppercase` / `lowercase` / `capitalize`: Регистр.
- **text-shadow-{size}** (v4.1: `text-shadow-sm` до `text-shadow-lg`): Тень текста.
- **text-shadow-{color}** / **text-shadow-{size}/{opacity}**: Цвет и прозрачность тени.
- **font-stretch-{value}** (v4.0: напр. `font-stretch-condensed`): Растяжение шрифта.

## 4. Colors & Backgrounds (Цвета и фоны)
- `bg-{color}` / `text-{color}` / `border-{color}`: Цвета (P3-обновлённые в v4).
- `opacity-{value}`: Прозрачность (напр. `opacity-50`).
- `bg-gradient-to-{dir}`: Градиент (устарело в v4).
- **bg-linear-{angle}** (v4.0: напр. `bg-linear-45`): Линейный градиент.
- **bg-conic-{...}** / **bg-radial-{...}** (v4.0): Конусный/радиальный градиент.
- **/srgb** / **/oklch** (v4.0): Модификаторы интерполяции градиентов.
- `from-{color}` / `via-{color}` / `to-{color}`: Цвета в градиенте.

## 5. Borders & Shadows (Границы и тени)
- `border` / `border-{size}` / `border-{color}`: Границы.
- `rounded-{size}` / `rounded-{sides}-{size}`: Скругления.
- `shadow-{size}` (напр. `shadow-lg`): Тень.
- **inset-shadow-{size}** (v4.0: напр. `inset-shadow-sm`): Внутренняя тень.
- **inset-ring-{size}** (v4.0): Внутреннее кольцо (граница).
- **drop-shadow-{color}** / **drop-shadow-{color}/{opacity}** (v4.1): Цветная тень.

## 6. Effects & Filters (Эффекты)
- `blur-{size}` / `brightness-{value}` / `contrast-{value}`: Фильтры.
- **mask-{type}** (v4.1: напр. `mask-radial-from-transparent`, `mask-linear-to-b`): Маски (градиенты, стороны).
- `backdrop-blur-{size}`: Размытие фона.

## 7. Transforms (Трансформации)
- `rotate-{deg}` / `scale-{value}` / `translate-{dir}-{size}`: 2D-трансформы.
- **rotate-x-{deg}** / **rotate-y-{deg}** / **scale-z-{value}** / **translate-z-{size}** (v4.0): 3D-трансформы.
- **perspective-distant** (v4.0): Перспектива для 3D.
- **transform-3d** (v4.0): Включает 3D-рендеринг.
- `transition-{property}` / `duration-{ms}`: Анимации.

## 8. Interactive States (Состояния)
- `hover:` / `focus:` / `active:`: Варианты состояний.
- `disabled:` / `group-hover:`: Групповые и отключённые.
- **starting:** (v4.0: для @starting-style, напр. `starting:opacity-0`).
- **not-*** (v4.0: напр. `not-hover:opacity-75`): Negation.
- **inert:** (v4.0: для атрибута inert).
- **nth-{n}** / **nth-last-{n}** (v4.0: напр. `nth-3:bg-red-500`).
- **pointer-fine:** / **pointer-coarse:** / **any-pointer-*** (v4.1: для устройств ввода).
- **details-content:** (v4.1: для <details>).
- **inverted-colors:** / **noscript:** / **user-valid:** / **user-invalid:** (v4.1: для специальных состояний).

## 9. Responsive & Other (Адаптив и прочее)
- `sm:` / `md:` / `lg:` / `xl:` / `2xl:`: Breakpoints.
- **color-scheme-{light/dark}** (v4.0: для схемы цветов).
- **overflow-wrap** (v4.1: `wrap-break-word` / `wrap-anywhere`): Обработка длинных слов.
- `sr-only`: Только для screen readers.
- `print:`: Для печати.

## Быстрые советы
- Arbitrary: `bg-[#ff0000]` или `w-[17rem]`.
- Темы: `@theme { --color-primary: oklch(...); }` – генерит переменные.
- Миграция с v3: Убери tailwind.config.js, используй CSS-конфиг.
- Тестируй: В Tailwind Play (play.tailwindcss.com).

Для полного списка: `npx tailwindcss init` или docs.
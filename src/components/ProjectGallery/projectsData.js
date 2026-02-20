import IconReact from '../icons/skilsForCards/IconReact/IconReact';
import IconJS from '../icons/skilsForCards/IconJS/IconJS';
import IconZustand from '../icons/skilsForCards/IconZustand/IconZustand';
import IconHTML from '../icons/skilsForCards/IconHTML/IconHTML';
import IconCSS from '../icons/skilsForCards/IconCSS/IconCSS';
import IconSCSS from '../icons/skilsForCards/IconSCSS/IconSCSS';
import IconPixo from '../icons/skilsForCards/IconPixo/IconPixo';
import IconFigma from '../icons/skilsForCards/IconFigma/IconFigma';
import IconAdobePhotoshop from '../icons/skilsForCards/IconAdobePhotoshop/IconAdobePhotoshop';
import IconJQuery from '../icons/skilsForCards/IconJQuery/IconJQuery';
import IconBootstrap from '../icons/skilsForCards/IconBootstrap/IconBootstrap';

//  [IconReact, IconJS, IconZustand, IconHTML, IconCSS, IconSCSS, IconPixo, IconFigma, IconAdobePhotoshop, IconJQuery,]

// title_en - полная версия заголовка
// mobile_title_en - может быть короткой версией заголовка для того, чтобы помещалась в хедере карточки-аккордиона
// header_title_short_en - короткая версия для шапки-хедера('PageTitlrs') в самом верху страниц

const projects = [
        { 
        id: 11,
        slug: 'portfolio',
        title_en: 'Portfolio',
        title_ru: 'Портфолио',
        mobile_title_en: 'Portfolio',
        mobile_title_ru: 'Портфолио',
        header_title_short_en: 'Portfolio',
        header_title_short_ru: 'Портфолио',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/11-portfolio.jpg'),
        iconSkills: [ IconReact, IconJS, IconZustand, IconSCSS, IconPixo, IconAdobePhotoshop, ],
        description_en: 'Portfolio website built with React and Zustand that showcases all my projects. Features a dynamic 20-color accent system with CSS Houdini, dark/light themes, and full bilingual support (EN/RU). Includes a custom UI component library (UniversalText, UniversalTitle, ContentBox), SVG icon system with factory pattern, animated promo block with rotating taglines, infinite skills carousel, adaptive project cards with mobile accordion, project detail pages with dual video player (YouTube/RuTube), and a serverless contact form with Resend API. Also features an animated Telegram button with 360° rotation and a dynamic favicon that syncs with the current accent color.',
        description_ru: 'Сайт-портфолио на React и Zustand, демонстрирующий все мои проекты. Оснащено динамической системой из 20 акцентных цветов на CSS Houdini, темной и светлой темами, полной поддержкой двух языков (EN/RU). Включает библиотеку UI-компонентов (UniversalText, UniversalTitle, ContentBox), систему SVG-иконок с фабричным паттерном, анимированный промо-блок со сменяющимися фразами, бесконечную карусель навыков, адаптивные карточки проектов с мобильным аккордеоном, страницы проектов с двойным видеоплеером (YouTube/RuTube) и серверless форму обратной связи через Resend API. Также присутствует анимированная кнопка Telegram с вращением на 360° и динамический фавикон, синхронизированный с текущим акцентным цветом.',
        demo: 'https://portfolio-ivory-eta-yqlgrhzd54.vercel.app/',
        gitHubLink: 'https://github.com/MikeVorobyev/portfolio',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            {
                featuresTitle_en: 'Dynamic Accent Color System with CSS Houdini',
                featuresTitle_ru: 'Динамическая система акцентных цветов на CSS Houdini',
                featuresDescription_en: 'The entire interface is built around a *rotating accent color system* powered by *CSS Houdini\'s `@property`*. This allows the site to *smoothly animate color transitions* over 3 seconds — something impossible with standard CSS variables. A *Zustand store* cycles through a palette of colors, updating all accent elements simultaneously: text, gradients, borders, icons, and even the dynamic favicon. The result is a *living interface* that subtly shifts over time, creating a unique visual experience.',
                featuresDescription_ru: 'Весь интерфейс построен вокруг *системы сменяющихся акцентных цветов* с использованием *CSS Houdini* и *`@property`*. Это позволяет сайту *плавно анимировать переходы цветов* за 3 секунды — что невозможно с обычными CSS-переменными. *Zustand-стор* циклически перебирает палитру цветов, мгновенно обновляя все акцентные элементы: текст, градиенты, границы, иконки и даже динамический фавикон. В результате интерфейс *остается живым*, незаметно меняясь со временем и создавая уникальную визуальную атмосферу.'
            },
            {
                featuresTitle_en: 'Fixed Navigation Bar with Responsive Behavior',
                featuresTitle_ru: 'Фиксированная панель навигации с адаптивным поведением',
                featuresDescription_en: 'A *fixed navigation bar* that remains accessible at all times. On desktop, it displays theme toggle, language switcher, and nav links. On mobile, it collapses into a *burger menu* with smooth animations. At the top of the page, the bar is fully transparent. As the user scrolls, a *glassmorphism effect* smoothly fades in after 50px, improving readability over content. Active links are highlighted with the current *accent color*.',
                featuresDescription_ru: '*Фиксированная панель навигации*, всегда доступная пользователю. На десктопе отображает переключатели темы и языка, а также ссылки на разделы. На мобильных превращается в *бургер-меню* с плавной анимацией. В верхней части страницы панель полностью прозрачна. При скролле после 50px плавно появляется *эффект стекла (glassmorphism)*, улучшающий читаемость поверх контента. Активные ссылки подсвечиваются текущим *акцентным цветом*.'
            },
            {
                featuresTitle_en: 'Dual Theme System (Dark/Light)',
                featuresTitle_ru: 'Двойная система тем (темная/светлая)',
                featuresDescription_en: 'The portfolio supports both *dark and light themes* with dedicated color palettes that adapt to the current accent color. Theme switching is managed globally via *`useThemeStore`* and applied through CSS classes. The *`ThemeToggle`* component features a *hand-drawn animated lamp* that swings gently with pulsing rays — the lamp *visually turns on/off* when switching themes. All theme transitions use CSS custom properties with *smooth gradient animations*, ensuring seamless visual experience.',
                featuresDescription_ru: 'Портфолио поддерживает *темную и светлую темы* с отдельными цветовыми палитрами, адаптирующимися под текущий акцентный цвет. Переключение темы глобально управляется через *`useThemeStore`* и применяется через CSS-классы. Компонент *`ThemeToggle`* содержит *рисованную анимированную лампу*, которая мягко покачивается с пульсирующими лучами — лампа *визуально включается/выключается* при смене темы. Все переходы между темами используют CSS-переменные с *плавными анимациями градиентов*, обеспечивая бесшовный визуальный опыт.'
            },
            {
                featuresTitle_en: 'Animated Lamp Toggle for Theme Switching',
                featuresTitle_ru: 'Анимированная лампа для переключения темы',
                featuresDescription_en: 'The *`ThemeToggle`* component features a *hand-drawn lamp* with two animations: a *gentle swinging motion* (4-second cycle) that makes the lamp look like it\'s hanging, and *pulsing rays* that appear in light mode. When switching themes, the lamp *visually turns on/off* — the lit lamp with rays fades in for light mode, while the unlit lamp appears for dark mode. All animations are pure CSS with `@keyframes`, and the component uses opacity transitions for smooth crossfading between states.',
                featuresDescription_ru: 'Компонент *`ThemeToggle`* содержит *рисованную лампу* с двумя анимациями: *мягкое покачивание* (цикл 4 секунды), создающее эффект подвешенной лампы, и *пульсирующие лучи*, появляющиеся в светлой теме. При переключении темы лампа *визуально включается/выключается* — зажженная лампа с лучами плавно появляется в светлой теме, а выключенная — в темной. Все анимации реализованы на чистом CSS через `@keyframes`, а для плавной смены состояний используются opacity-переходы.'
            },
            {
                featuresTitle_en: 'Dynamic Favicon Synced with Accent Color',
                featuresTitle_ru: 'Динамический фавикон под текущий акцентный цвет',
                featuresDescription_en: 'A custom *`useDynamicFavicon`* hook generates a real-time favicon that matches the current accent color. When the color rotates (every 10 seconds) or when the theme toggles, the hook creates an *inline SVG blob* with the new color and updates the browser\'s favicon. Old blobs are cleaned up to prevent memory leaks. This subtle detail ties the browser UI into the site\'s dynamic color system.',
                featuresDescription_ru: 'Кастомный хук *`useDynamicFavicon`* генерирует фавикон в реальном времени под текущий акцентный цвет. При смене цвета (каждые 10 секунд) или переключении темы хук создает *SVG-блоб* с новым цветом и обновляет иконку вкладки браузера. Старые блобы удаляются для предотвращения утечек памяти. Эта небольшая деталь связывает интерфейс браузера с динамической цветовой системой сайта.'
            },
            {
                featuresTitle_en: 'Bilingual Architecture (EN/RU)',
                featuresTitle_ru: 'Двуязычная архитектура (EN/RU)',
                featuresDescription_en: 'The entire portfolio is fully *bilingual*, with every piece of content available in both English and Russian. A central *`languageStore`* manages the current language, and all UI components automatically render the correct version. The system includes *dedicated font families for each language* — Humane, General Sans, DM Sans for English; Condens, OpenSansSoft for Russian — ensuring optimal typography for both. The language toggle button features the same *animated gradient* as the site\'s color system, seamlessly integrating with the overall design.',
                featuresDescription_ru: 'Все портфолио полностью *двуязычное*: каждый элемент контента существует на английском и русском. Центральный *`languageStore`* управляет текущим языком, а все UI-компоненты автоматически отображают нужную версию. Система включает *отдельные семейства шрифтов для каждого языка* — Humane, General Sans, DM Sans для английского; Condens, OpenSansSoft для русского — что обеспечивает идеальную типографику для обоих. Кнопка переключения языка использует тот же *анимированный градиент*, что и цветовая система сайта, гармонично вписываясь в общий дизайн.'
            },
            {
                featuresTitle_en: 'Animated Promo Block with Rotating Taglines',
                featuresTitle_ru: 'Анимированный промо-блок со сменяющимися фразами',
                featuresDescription_en: 'The homepage features a dynamic *`PromoBlock`* with a *dual-layer animated background*: *"DESIGNER UI"* and *"FRONTEND DEVELOPER"* texts scroll infinitely in *opposite directions*, creating a dynamic visual effect. A *CSS gradient mask* softens the edges, making the background text smoothly fade out at the sides. The *`NameCard`* component displays a large *"MIKE"* logo and a *tagline that smoothly fades in/out* every 10 seconds, cycling through a pool of *30+ bilingual phrases*. Social media icons (*`IconVK`*, *`IconGithub`*) are implemented as *SVG components* that inherit the current accent color, seamlessly integrating with the site\'s dynamic color system.',
                featuresDescription_ru: 'На главной странице динамический *`PromoBlock`* с *двухслойным анимированным фоном*: тексты *"DESIGNER UI"* и *"FRONTEND DEVELOPER"* бесконечно прокручиваются в *противоположных направлениях*, создавая динамичный визуальный эффект. *CSS-градиентная маска* смягчает края, заставляя фоновый текст плавно исчезать по бокам. Компонент *`NameCard`* отображает крупный логотип *"MIKE"* и *фразу, которая плавно сменяется* каждые 10 секунд, перебирая пул из *30+ двуязычных вариантов*. Иконки соцсетей (*`IconVK`*, *`IconGithub`*) реализованы как *SVG-компоненты*, которые наследуют текущий акцентный цвет, органично вписываясь в динамическую цветовую систему сайта.'
            },
            {
                featuresTitle_en: 'Animated Telegram Button with Circular Flight',
                featuresTitle_ru: 'Анимированная кнопка Telegram с полетом по кругу',
                featuresDescription_en: 'The *contact section* on the *homepage* features a *Telegram button* with an *SVG logo* of the messenger. The button itself has a *gradient background* that matches the site\'s dynamic color system. On hover over the button, the *Telegram icon* performs a *full 360-degree rotation* — one smooth circular loop in a 1.5-second animation. The effect is implemented purely in CSS with *`transform`* properties. On mobile devices, the animation is disabled for performance.',
                featuresDescription_ru: 'В секции *контактов* на *главной странице* расположена *кнопка Telegram* с *SVG-логотипом* мессенджера. Сама кнопка имеет *градиентный фон*, соответствующий динамической цветовой системе сайта. При наведении на кнопку *иконка Telegram* совершает *полный оборот на 360 градусов* — один плавный круг за 1.5 секунды. Эффект реализован на чистом CSS через свойства *`transform`*. На мобильных устройствах анимация отключается для производительности.'
            },
            {
                featuresTitle_en: 'UniversalButton — Reusable Component for Navigation',
                featuresTitle_ru: 'UniversalButton — переиспользуемый компонент для навигации',
                featuresDescription_en: 'The *`UniversalButton`* handles multiple navigation scenarios through a *simple props interface*. When *`to`* is provided, it renders a React Router link for internal navigation. With *`href`*, it becomes an external link opening in a new tab. Adding *`download`* alongside *`href`* triggers file downloads. The *`back`* prop transforms it into a special *"Back"* button that returns to the previous page and restores scroll position. The component integrates with the *dynamic color system* through animated gradients that follow the current accent color. A key feature is the built-in *scroll preservation*: when *`saveScroll={true}`* is passed, the button saves the current scroll position to *`sessionStorage`* before navigating, allowing precise return via the *Back* button.',
                featuresDescription_ru: 'Компонент *`UniversalButton`* обрабатывает несколько навигационных сценариев через *простой интерфейс пропсов*. При передаче *`to`* рендерится ссылка React Router для внутренней навигации. С пропом *`href`* становится внешней ссылкой, открывающейся в новой вкладке. Добавление *`download`* вместе с *`href`* инициирует скачивание файлов. Проп *`back`* превращает кнопку в специальную кнопку *"Назад"*, возвращающую на предыдущую страницу с восстановлением скролла. Компонент интегрирован с *динамической цветовой системой* через анимированные градиенты под текущий акцентный цвет. Ключевая особенность — встроенное *сохранение скролла*: при передаче *`saveScroll={true}`* кнопка сохраняет текущую позицию скролла в *`sessionStorage`* перед навигацией, позволяя точно вернуться через кнопку *"Назад"*.'
            },
            {
                featuresTitle_en: 'PageTitle Component — Smart Page Headers with Back Navigation',
                featuresTitle_ru: 'Компонент PageTitle — умные заголовки страниц с навигацией назад',
                featuresDescription_en: 'The *`PageTitle`* component provides consistent headers for all pages (except the homepage). Visually, it\'s a *rounded container* with a distinctive *composite left edge*: a small upper block visually extends the main container, creating space for the *"Back"* button below. An *SVG element* smoothly rounds the *inner corner* where the main container meets this upper block. The header displays the current section name (page or project) with *responsive typography* that scales across devices. The integrated *"Back"* button — powered by the universal *`UniversalButton`* component — intelligently returns users to their *previous page and exact scroll position* using *sessionStorage*, creating seamless navigation throughout the site.',
                featuresDescription_ru: 'Компонент *`PageTitle`* обеспечивает единообразные заголовки для всех страниц (кроме главной). Визуально это *контейнер со скругленными краями* и характерным *составным левым краем*: небольшой верхний блок визуально удлиняет основной контейнер, освобождая место для кнопки *"Назад"* снизу. *SVG-элемент* плавно скругляет *внутренний угол* между основным контейнером и этим верхним блоком. Заголовок отображает название текущего раздела (страницы или проекта) с *адаптивной типографикой* под разные устройства. Встроенная кнопка *"Назад"* — на базе универсального компонента *`UniversalButton`* — умно возвращает пользователя на *предыдущую страницу и точную позицию скролла* через *sessionStorage*, обеспечивая бесшовную навигацию по сайту.'
            },
            {
                featuresTitle_en: 'UniversalTitle Component — Flexible Heading System',
                featuresTitle_ru: 'Компонент UniversalTitle — гибкая система заголовков',
                featuresDescription_en: '*`UniversalTitle`* is a versatile heading component that handles multi-part titles with individual colors and bilingual content. Each title segment can have its own color — either *theme-dependent* (adapting to dark/light mode) or *fixed*. The component automatically switches between English and Russian based on the selected language and supports any heading level from *h1* to *h6*. All text inherits the site\'s *dynamic accent color system* when no specific color is provided.',
                featuresDescription_ru: '*`UniversalTitle`* — универсальный компонент для заголовков, управляющий составными заголовками с индивидуальными цветами и двуязычным контентом. Каждый сегмент заголовка может иметь свой цвет — либо *зависящий от темы* (адаптируется под светлую/темную), либо *фиксированный*. Компонент автоматически переключается между английским и русским в зависимости от выбранного языка и поддерживает любые уровни заголовков от *h1* до *h6*. Весь текст наследует *динамическую систему акцентных цветов* сайта, если не указан конкретный цвет.'
            },
            {
                featuresTitle_en: 'Universal Text Component with Custom Markup System',
                featuresTitle_ru: 'Универсальный текстовый компонент с системой маркеров',
                featuresDescription_en: "The *`UniversalText`* component powers all text content with a *custom markup system*: words wrapped in *asterisks* like *(~*Lorem Ipsum~*)* become *accent-colored*. The component is fully *bilingual*: every piece of text exists in both *English and Russian*, automatically switching based on the selected language. It's also *theme-aware* — colors adapt seamlessly to *dark and light modes*, with the accent color dynamically changing alongside the site's *rotating accent color system*.",
                featuresDescription_ru: "Компонент *`UniversalText`* отвечает за весь текст. Используется *кастомная система разметки*: слова в звездочках *(~*Lorem Ipsum~*)* становятся *акцентного цвета*. Компонент полностью *двуязычный*: каждый текст существует на *русском и английском*, автоматически переключаясь при смене языка. Также реализована *адаптация под темы* — цвета корректно отображаются в *темной и светлой* версиях, а акцентный цвет меняется синхронно с *системой акцентных цветов* сайта."
            },
            {
                featuresTitle_en: 'ContentBox — Adaptive Container Component',
                featuresTitle_ru: 'ContentBox — адаптивный компонент-контейнер',
                featuresDescription_en: '*`ContentBox`* serves as the primary building block for layout sections. It provides a consistent flex container with customizable properties (direction, alignment, gap, padding) through a simple `settings` prop. The component automatically applies *gradient backgrounds* based on the current accent color and supports configurable *drop shadows* with adjustable opacity. All styles are scoped via SCSS modules, ensuring no unintended side effects across different sections of the site.',
                featuresDescription_ru: '*`ContentBox`* — основной строительный блок для секций макета. Это flex-контейнер с настраиваемыми свойствами (направление, выравнивание, отступы, gap) через простой проп `settings`. Компонент автоматически применяет *градиентные фоны* на основе текущего акцентного цвета и поддерживает настраиваемые *тени* с регулируемой прозрачностью. Все стили изолированы через SCSS-модули, что исключает побочные эффекты в разных частях сайта.'
            },
            {
                featuresTitle_en: 'Icon Factory System',
                featuresTitle_ru: 'Фабричная система иконок',
                featuresDescription_en: 'All skill icons are stored in a centralized *`iconLibrary`* and rendered via the *`IconFactory`* component using a simple *`name_ID`* prop. The library contains *30+ icons* (React, Zustand, SCSS, Figma, etc.) that are *memoized* for performance and support dynamic colors adapting to the current theme.',
                featuresDescription_ru: 'Все иконки навыков хранятся в централизованной библиотеке *`iconLibrary`* и рендерятся через компонент *`IconFactory`* с помощью простого пропа *`name_ID`*. Библиотека содержит *30+ иконок* (React, Zustand, SCSS, Figma и др.), которые *мемоизированы* для производительности и поддерживают динамические цвета, адаптирующиеся под текущую тему.'
            },
            {
                featuresTitle_en: 'Infinite Skills Carousel',
                featuresTitle_ru: 'Бесконечная карусель навыков',
                featuresDescription_en: 'On the *About page*, the *`SkillsCarousel`* displays skill icons in a continuously scrolling strip. The component accepts *icon size*, *gap between icons*, and *animation speed* as props, with defaults optimized for desktop. All these parameters automatically scale for mobile: on small screens, icons shrink, gaps reduce, and scroll speed slows down for better visibility. The carousel creates an infinite loop by triplicating the icon array and uses *`requestAnimationFrame`* for smooth performance. A *CSS gradient mask* fades the edges, and the animation can be toggled on/off via the *`animation`* prop. The component is wrapped in *`React.memo`* to prevent unnecessary re-renders.',
                featuresDescription_ru: 'На странице *"Обо мне"* компонент *`SkillsCarousel`* отображает иконки навыков в бесконечно прокручивающейся ленте. Компонент принимает *размер иконок*, *расстояние между ними* и *скорость анимации* как пропсы, с оптимизированными значениями для десктопа. Все параметры автоматически масштабируются под мобильные устройства: на маленьких экранах иконки уменьшаются, расстояния сокращаются, а скорость прокрутки снижается для лучшей видимости. Карусель создает бесконечную прокрутку, утраивая массив иконок, и использует *`requestAnimationFrame`* для плавности. *CSS-градиентная маска* скрывает края, а анимацию можно включить/выключить через проп *`animation`*. Компонент обернут в *`React.memo`* для предотвращения лишних ререндеров.'
            },
            {
                featuresTitle_en: 'Contact Form with Email Integration',
                featuresTitle_ru: 'Форма обратной связи с отправкой на почту',
                featuresDescription_en: 'A fully functional *contact form* on the Contacts page. When submitted, it sends a *POST request* to a serverless API endpoint *(`/api/send-email`)* that forwards the message via *Resend email service*. The form includes *real-time validation*, *loading states* (button disables and shows "Sending..."), and *notifications* that appear on success or error. Notifications are fully bilingual (EN/RU) and include a close button.',
                featuresDescription_ru: 'Полноценная *форма обратной связи* на странице Контактов. При отправке уходит *POST-запрос* на серверless API *(`/api/send-email`)*, который пересылает сообщение через *почтовый сервис Resend*. Форма включает *валидацию в реальном времени*, *состояния загрузки* (кнопка блокируется и показывает "Отправка..."), и *уведомления* при успехе или ошибке. Уведомления полностью двуязычны (EN/RU) и имеют кнопку закрытия.'
            },
            {
                featuresTitle_en: 'Adaptive Project Cards with Mobile Accordion',
                featuresTitle_ru: 'Адаптивные карточки проектов с мобильным аккордеоном',
                featuresDescription_en: 'The *`ProjectCard`* component has two distinct layouts: a *3-column grid* for desktop and an *animated accordion* for mobile devices *(`<768px`)*. On desktop, each card displays a preview image, project title, short description, tech stack icons, and a "Learn more" button. On mobile devices, cards are initially collapsed showing only the project title in a compact header. Tapping the header smoothly expands the card to reveal the full content — the same preview image, description, tech stack, and button as the desktop version. Card state is managed via *Zustand* (`accordionStore`).',
                featuresDescription_ru: 'Компонент *`ProjectCard`* имеет два различных макета: *3-колоночную сетку* для десктопа и *анимированный аккордеон* для мобильных устройств *(`<768px`)*. На десктопе каждая карточка отображает превью, название проекта, краткое описание, иконки технологий и кнопку "Узнать больше". На мобильных устройствах карточки изначально свернуты и показывают только название проекта в компактном заголовке. При тапе по заголовку карточка плавно раскрывается, демонстрируя полное содержание — то же превью, описание, иконки технологий и кнопку, что и в десктопной версии. Состояние карточек управляется через *Zustand* (`accordionStore`).'
            },
            {
                featuresTitle_en: 'Project Detail Page with Dual Video Player',
                featuresTitle_ru: 'Страница проекта с двойным видеоплеером',
                featuresDescription_en: 'Each project has a dedicated *`ProjectDetail`* page displaying: a *dual-platform video player* with tabs for YouTube and RuTube, full project title with tech stack icons, a scrollable description with *dynamic border* that appears when content exceeds 150px (using *`ResizeObserver`*), and external links — *Demo* (opens the live project website) and *GitHub* (opens the project repository).',
                featuresDescription_ru: 'У каждого проекта есть отдельная страница *`ProjectDetail`*, отображающая: *двухплатформенный видеоплеер* с вкладками YouTube и RuTube, полное название с иконками технологий, прокручиваемое описание с *динамической границей*, появляющейся при превышении высоты 150px (используется *`ResizeObserver`*), и внешние ссылки — *Demo* (открывает работающий сайт проекта) и *GitHub* (открывает репозиторий проекта).'
            },
        ],
    },
    { 
        id: 10,
        slug: 'silver-mask',
        title_en: 'The Silver Mask',
        title_ru: 'Серебряная Маска',
        mobile_title_en: 'The Silver Mask',
        mobile_title_ru: 'Серебряная Маска',
        header_title_short_en: 'Silver Mask',
        header_title_short_ru: 'Серебряная Маска',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/10-silver-mask.jpg'),
        iconSkills: [ IconReact, IconJS, IconZustand, IconSCSS, IconPixo, IconAdobePhotoshop, ],
description_en: 'Touchscreen kiosk interface for a theatrical award concept. Fixed Full HD resolution — fullscreen mode (F11) required for proper navigation. Built with React and Zustand: custom CSS slide navigation (CSS Grid + transform), ResizeObserver-based proportional positioning, universal modal with two display modes, centralized state management (three stores), dynamic image imports, touch button animations, layered backgrounds, and SCSS modules.',

description_ru: 'Сенсорный киоск для концепции театральной премии. Фиксированное Full HD разрешение — обязателен полноэкранный режим (F11) для корректной навигации. На React и Zustand: кастомная CSS-навигация (CSS Grid + transform), пропорциональное позиционирование через ResizeObserver, универсальное модальное окно с двумя режимами, централизованное состояние (три стора), динамический импорт изображений, touch-анимация кнопок, двухслойный фон и SCSS-модули.',
        demo: 'https://silver-mask.vercel.app/',
        gitHubLink: 'https://github.com/MikeVorobyev/silver-mask',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            {
                featuresTitle_en: 'Kiosk Mode Interface (Fixed Full HD Resolution)',
                featuresTitle_ru: 'Режим сенсорного киоска (фиксированное Full HD разрешение)',
                featuresDescription_en: 'The project is designed for a stationary touch panel with a fixed Full HD resolution (1920×1080). *Fullscreen mode (F11) is required* for proper navigation and button visibility — this is not a bug but a deliberate feature of the physical installation. All UI elements are sized for comfortable touch interaction.',
                featuresDescription_ru: 'Проект разработан для стационарной сенсорной панели с фиксированным разрешением Full HD (1920×1080). *Обязателен полноэкранный режим (F11)* для корректной навигации и видимости кнопок — это не баг, а осознанная особенность физической инсталляции. Все элементы интерфейса имеют размеры, удобные для сенсорного взаимодействия.'
            },
            {
                featuresTitle_en: 'Custom CSS Slide Navigation Without Router',
                featuresTitle_ru: 'Кастомная CSS-навигация без роутера',
                featuresDescription_en: 'Four pages (Main, Gallery, Event Poster, About the Award) are loaded simultaneously and positioned within a *CSS Grid*. Navigation is implemented via CSS translate transformations — the entire container moves horizontally/vertically, creating smooth 2-second transitions without traditional routing or page reloads.',
                featuresDescription_ru: 'Четыре страницы (Главная, Галерея, Афиша, О премии) загружены одновременно и позиционированы внутри *CSS Grid*. Переключение реализовано через CSS-трансформации translate — весь контейнер перемещается по горизонтали/вертикали, создавая плавные 2-секундные переходы без традиционного роутинга и перезагрузок.'
            },
            {
                featuresTitle_en: 'Reference-Based Positioning System with ResizeObserver',
                featuresTitle_ru: 'Система позиционирования по референсу через ResizeObserver',
                featuresDescription_en: 'The height of the main background image is measured in real-time using *ResizeObserver* and stored in a *Zustand* store. This single reference value is used across all pages to calculate margins and positions via the *`calculatePercentage()`* helper, ensuring consistent *proportional spacing regardless of actual screen dimensions*.',
                featuresDescription_ru: 'Высота главного фонового изображения измеряется в реальном времени через *ResizeObserver* и сохраняется в *Zustand*-сторе. Это единое референсное значение используется на всех страницах для расчёта отступов и позиций через функцию *`calculatePercentage()`*, обеспечивая *пропорциональное расположение элементов независимо от реальных размеров экрана*.'
            },
            {
                featuresTitle_en: 'Universal Modal Window with Two Display Modes',
                featuresTitle_ru: 'Универсальное модальное окно с двумя режимами',
                featuresDescription_en: '*A single `MoreInfo` component handles detailed views for both the gallery and event poster*. A special parameter (props) passed to the component determines the display mode: when opened from the poster page, the window shows the date, title, subtitle, duration, a photo slider, and a full description; when opened from the gallery page — only the title and a photo slider. The modal appears with a smooth scale + translateY animation.',
                featuresDescription_ru: '*Одно модальное окно `MoreInfo` используется для показа подробной информации как в галерее, так и в афише*. Режим отображения задаётся специальным параметром (props), который передаётся в компонент: при открытии со страницы афиши окно показывает дату, заголовок, подзаголовок, продолжительность, слайдер с фото и полное описание; при открытии со страницы галереи — только заголовок и слайдер. Модальное окно появляется с плавной анимацией scale + translateY.'
            },
            {
                featuresTitle_en: 'Centralized Data Transfer via Zustand',
                featuresTitle_ru: 'Централизованная передача данных через Zustand',
                featuresDescription_en: 'Clicking any *gallery card* or *poster row* stores the selected item\'s data in the *useEventTransmission* store. The *MoreInfo* component subscribes to this store and displays detailed content. *Data clearing is delayed with 800ms setTimeout* to let the closing animation finish smoothly before resetting.',
                featuresDescription_ru: 'При клике на любую *карточку галереи* или *строку афиши* данные выбранного элемента сохраняются в сторе *useEventTransmission*. Компонент *MoreInfo* подписан на этот стор и отображает подробный контент. *Очистка данных происходит с задержкой 800ms через setTimeout*, чтобы анимация закрытия успела завершиться до сброса.'
            },
            {
                featuresTitle_en: 'Custom Touch Button Animation',
                featuresTitle_ru: 'Кастомная анимация сенсорных кнопок',
                featuresDescription_en: 'Buttons (*ButtonMain*, *ButtonBack*) implement a custom tap animation using React *useState* and a *100ms setTimeout*. This ensures visual feedback on touch devices where CSS *:active* may not trigger reliably. The button scales down to 80% on press, then returns to normal.',
                featuresDescription_ru: 'Кнопки (*ButtonMain*, *ButtonBack*) реализуют кастомную анимацию нажатия через React *useState* и *setTimeout на 100мс*. Это гарантирует визуальную обратную связь на сенсорных устройствах, где CSS *:active* может срабатывать ненадёжно. При нажатии кнопка масштабируется до 80%, затем возвращается в исходное состояние.'
            },
            {
                featuresTitle_en: 'Dynamic Image Import with require.context',
                featuresTitle_ru: 'Динамический импорт изображений через require.context',
                featuresDescription_en: 'All photo folders are loaded using *require.context* through a custom *importAll* helper. This allows adding new images to a folder without manually importing each file. Used for gallery categories, event posters, and the "About" page images — *zero manual import lists*.',
                featuresDescription_ru: 'Все папки с фотографиями загружаются через *require.context* с помощью кастомной функции *importAll*. Это позволяет добавлять новые изображения в папку без ручного импорта каждого файла. Используется для категорий галереи, событий афиши и страницы "О премии" — *никаких ручных списков импорта*.'
            },
            {
                featuresTitle_en: 'Layered Background with Fade Transition on Main Page',
                featuresTitle_ru: 'Многослойный фон с плавным исчезновением на главной',
                featuresDescription_en: 'The interface uses two background layers: a permanent repeating pattern visible on all pages, and an additional overlay image that appears only on the main page. When navigating away from the main screen, this overlay smoothly fades out (opacity: 0 over 1 second), creating a subtle atmospheric transition.',
                featuresDescription_ru: 'В интерфейсе используется два слоя фона: постоянный повторяющийся паттерн, видимый на всех страницах, и дополнительное накладываемое изображение, которое появляется только на главной странице. При уходе с главного экрана это изображение плавно исчезает (opacity: 0 за 1 секунду), создавая атмосферный эффект перехода.'
            },
            {
                featuresTitle_en: 'Modular Component Architecture',
                featuresTitle_ru: 'Модульная архитектура компонентов',
                featuresDescription_en: 'The interface is built from reusable components: Header, ButtonBack, ButtonMain, InformationContaier, GalleryCard, and the universal MoreInfo. Each component has its own SCSS module, ensuring style isolation and easy maintenance.',
                featuresDescription_ru: 'Интерфейс построен из переиспользуемых компонентов: Header, ButtonBack, ButtonMain, InformationContaier, GalleryCard и универсальный MoreInfo. Каждый компонент имеет собственный SCSS-модуль, что обеспечивает изоляцию стилей и лёгкую поддержку.'
            },
            {
                featuresTitle_en: 'Three Zustand Stores for Different Concerns',
                featuresTitle_ru: 'Три стора Zustand для разных задач',
                featuresDescription_en: 'The application uses three separate Zustand stores, each handling a single responsibility: *useNavigationButton* manages navigation state (tracks which button was pressed on the main page — gallery, event poster, about the award, or back); *useHeightMainIMG* stores the height of the main background image (measured via ResizeObserver) and provides a single reference for calculating margins across all pages; *useEventTransmission* holds the data of the selected gallery card or poster row and passes it to the MoreInfo modal. This clean separation keeps state management predictable and maintainable.',
                featuresDescription_ru: 'В приложении используются три отдельных стора Zustand, каждый отвечает за свою задачу: *useNavigationButton* управляет навигацией (хранит, какая кнопка нажата на главной — галерея, афиша, о премии или назад); *useHeightMainIMG* хранит высоту главного фонового изображения (измеряется через ResizeObserver) и служит единым референсом для расчёта отступов на всех страницах; *useEventTransmission* содержит данные выбранной карточки галереи или строки афиши и передаёт их в модальное окно MoreInfo. Такое чёткое разделение делает управление состоянием предсказуемым и удобным в поддержке.'
            },
        ],
    },
    { 
        id: 9,
        slug: 'todo-for-kids',
        title_en: 'To Do For Kids',
        title_ru: 'To Do для детей',
        mobile_title_en: 'To Do For Kids',
        mobile_title_ru: 'To Do для детей',
        header_title_short_en: 'To Do',
        header_title_short_ru: 'To Do',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/9-todo-for-kids.jpg'),
        iconSkills: [ IconReact, IconJS, IconZustand, IconSCSS, IconFigma, IconPixo, IconAdobePhotoshop, ],
        description_en: 'A to-do app for elementary school children with a hand-drawn notebook aesthetic. Side panels dynamically fill with random addition/subtraction problems and SVG illustrations — the amount scales with the main container height. Zustand with persist middleware saves tasks to localStorage. Completed tasks get an animated stamp that alternates between the completion date and time. Each stamp has a random rotation, and its position adjusts to the width of the text container. Hovering the trash can lifts its lid and slowly sucks in crumpled paper — the animation adapts to different screen sizes.',
        description_ru: 'Туду-лист для детей младшего школьного возраста в стиле рисованного блокнота. Боковые панели динамически заполняются случайными примерами на сложение/вычитание и SVG-картинками — их количество зависит от высоты основного блока. Zustand автоматически сохраняет задачи в localStorage. В выполненной задаче появляется анимированный штамп, который по очереди показывает дату и время выполнения. У штампа случайный угол наклона, а его положение подстраивается под ширину контейнера с текстом. При наведении на кнопку-корзину крышка поднимается, и бумага медленно влетает внутрь — анимация адаптируется под разные экраны.',
        demo: 'https://todo-for-kids.vercel.app/',
        gitHubLink: 'https://github.com/MikeVorobyev/todo-for-kids',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            {
                featuresTitle_en: 'Fully Responsive Notebook-Style Layout',
                featuresTitle_ru: 'Полностью адаптивная вёрстка в стиле блокнота',
                featuresDescription_en: 'The entire interface is designed as a hand-drawn notebook and *adapts seamlessly from 4K monitors down to mobile screens*.',
                featuresDescription_ru: 'Весь интерфейс выполнен в стиле рисованного блокнота и *адаптируется от 4K-мониторов до мобильных экранов*.'
            },
            {
                featuresTitle_en: 'Side Panels with Randomly Mixed Content',
                featuresTitle_ru: 'Боковые панели со случайным наполнением',
                featuresDescription_en: 'The side panels are filled with a random mix of SVG illustrations and simple math problems. Each math problem is generated on the fly with random numbers from 0 to 99, a random operation (addition or subtraction), and a random rotation angle. The result is calculated live. Each SVG illustration gets randomized size, vertical position (top/bottom), and horizontal alignment (left/center/right). The amount of content is tied to the height of the main task area, and *the algorithm ensures that two math problems never appear consecutively*.',
                featuresDescription_ru: 'Боковые панели заполняются случайной смесью SVG-картинок и простых математических примеров. Каждый пример генерируется на лету со случайными числами от 0 до 99, случайным действием (сложение или вычитание) и случайным углом наклона. Результат вычисляется сразу. Каждая SVG-картинка получает случайный размер, вертикальное положение (вверху/внизу) и горизонтальное выравнивание (слева/по центру/справа). Количество элементов привязано к высоте основного блока, *алгоритм также следит, чтобы два математических примера не шли подряд*.'
            },
            {
                featuresTitle_en: 'Height-Based Content Scaling with Zustand & ResizeObserver',
                featuresTitle_ru: 'Масштабирование контента по высоте через Zustand и ResizeObserver',
                featuresDescription_en: 'The height of the main task container is measured in real time with *ResizeObserver* and synced to a *Zustand store*. Side panels read this value and adjust the amount of generated content accordingly — more height, more illustrations and math examples. All without passing props down the tree.',
                featuresDescription_ru: 'Высота основного контейнера с задачами измеряется в реальном времени через *ResizeObserver* и синхронизируется с *Zustand-хранилищем*. Боковые панели читают это значение и подстраивают количество генерируемого контента — чем выше контейнер, тем больше картинок и примеров. Без передачи пропсов вглубь дерева.'
            },
            {
                featuresTitle_en: 'Adaptive Row Counter Based on Screen Height',
                featuresTitle_ru: 'Адаптивный подсчёт строк под высоту экрана',
                featuresDescription_en: 'The *`getRowsCount()`* helper function calculates how many task rows fit on the screen based on current window width. The result is used to fill empty space with placeholder rows, keeping the notebook layout visually complete at any screen size.',
                featuresDescription_ru: 'Вспомогательная функция *`getRowsCount()`* рассчитывает, сколько строк с задачами помещается на экране в зависимости от текущей ширины окна. Результат используется для заполнения пустого пространства строками-заглушками, чтобы макет блокнота всегда выглядел завершённым.'
            },
            {
                featuresTitle_en: 'Continuous Notebook Margin Lines with Cyclic Pattern',
                featuresTitle_ru: 'Непрерывные линии полей блокнота с циклическим паттерном',
                featuresDescription_en: 'Each task row displays one of 8 unique PNG images that form the left margin line of the notebook. *The pattern* cycles through all variants and *seamlessly continues across any number of rows* — including empty placeholders — creating the illusion of a single, uninterrupted hand-drawn line running down the page.',
                featuresDescription_ru: 'Каждая строка задач отображает один из 8 уникальных PNG-рисунков, формирующих левую линию полей блокнота. *Паттерн* циклически перебирает все варианты и *бесшовно продолжается через любое количество строк* — включая пустые заполнители — создавая иллюзию единой непрерывной рисованной линии, идущей вниз по странице.'
            },
            {
                featuresTitle_en: 'Seamless Pattern Continuation in Footer',
                featuresTitle_ru: 'Бесшовное продолжение паттерна в футере',
                featuresDescription_en: 'The notebook margin line pattern doesn\'t stop at the last task. A custom index calculation ensures that the two footer rows continue the exact same 8-line cycle — so the line looks like one continuous hand-drawn margin from top to bottom, including the empty space.',
                featuresDescription_ru: 'Паттерн линии полей блокнота не обрывается после последней задачи. Специальный расчёт индексов обеспечивает, что две строки футера продолжают тот же самый цикл из 8 линий — так что линия выглядит как единый непрерывный рисованный край сверху донизу, включая пустое пространство.'
            },
            {
                featuresTitle_en: 'Screen-Adaptive PNG Replacement System',
                featuresTitle_ru: 'Система адаптивной подмены PNG под разрешение экрана',
                featuresDescription_en: 'All horizontal lines (task row borders, header and footer dividers) are PNG images available in 6 different resolutions. A helper function detects the current screen width and serves the appropriately sized image — ensuring sharp edges and consistent thickness without pixelation on any device.',
                featuresDescription_ru: 'Все горизонтальные линии (границы строк задач, разделители в шапке и подвале) — это PNG-изображения в 6 разных разрешениях. Вспомогательная функция определяет текущую ширину экрана и подставляет картинку нужного размера — чтобы линии оставались чёткими и одинаковой толщины на любом устройстве без пикселизации.'
            },
            {
                featuresTitle_en: 'Animated Trash Can Button',
                featuresTitle_ru: 'Анимированная кнопка-корзина',
                featuresDescription_en: 'Hovering over the trash can button triggers a CSS animation: the lid lifts, and crumpled paper slowly floats into the bin — visually symbolizing the task being "thrown away". The animation adapts to different screen sizes with separate keyframes for each breakpoint.',
                featuresDescription_ru: 'При наведении на кнопку-корзину запускается CSS-анимация: крышка поднимается, и скомканная бумага медленно влетает в корзину — визуально символизируя, что задача "выбрасывается". Анимация адаптируется под разные размеры экрана с отдельными keyframes для каждого разрешения.'
            },
            {
                featuresTitle_en: 'Dual-State Stamp with Alternating Date/Time Display',
                featuresTitle_ru: 'Двухрежимный штамп с чередованием даты и времени',
                featuresDescription_en: 'Completed tasks receive a stamp that alternates between showing the completion date and the exact time. Two overlapping SVG stamps fade in and out, smoothly switching between the two. Each stamp gets a random rotation angle. *The horizontal position is dynamically calculated* based on the text container width, checkbox size, and delete button width — ensuring it stays within the visible area on any screen.',
                featuresDescription_ru: 'Выполненные задачи получают штамп, который поочерёдно показывает дату и время выполнения. Два наложенных SVG-штампа плавно сменяют друг друга. Каждый штамп получает случайный угол наклона. *Горизонтальное положение штампа динамически вычисляется* с учётом ширины контейнера с текстом, размера чекбокса и ширины кнопки-корзины — чтобы он всегда оставался в видимой области на любом экране.'
            },
            {
                featuresTitle_en: 'Automatic Save to LocalStorage via Zustand Persist',
                featuresTitle_ru: 'Автоматическое сохранение в LocalStorage через Zustand Persist',
                featuresDescription_en: 'All tasks are automatically saved to the browser\'s *localStorage* using *Zustand\'s persist middleware*.',
                featuresDescription_ru: 'Все задачи автоматически сохраняются в *localStorage* браузера через *middleware persist в Zustand*.'
            },
        ],
    },
    { 
        id: 8,
        slug: 'organic-healthy-fresh',
        title_en: 'Organic Healthy Fresh',
        title_ru: 'Organic Healthy Fresh',
        mobile_title_en: 'Organic Healthy Fresh',
        mobile_title_ru: 'Organic Healthy Fresh',
        header_title_short_en: 'Healthy Fresh',
        header_title_short_ru: 'Healthy Fresh',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/8-organic_healthy-fresh.jpg'),
        iconSkills: [ IconReact, IconJS, IconSCSS, IconFigma, ],
        description_en: "React project with a custom 3D card stack slider (no libraries), adaptive product grid — on mobile devices only 3 items are shown initially, the rest appear after clicking «Show More», centralized dark/light theme, and SVG sprite system. Fully responsive design.",
        description_ru: "React-проект с кастомным 3D-слайдером (без библиотек), адаптивной сеткой товаров — на мобильных устройствах сначала показывается 3 карточки, остальные по кнопке «Показать ещё», централизованной тёмной темой и SVG-спрайтами. Полностью адаптивная вёрстка.",
        demo: 'https://organic-healthy-fresh.vercel.app/',
        gitHubLink: 'https://github.com/MikeVorobyev/Organic-Healthy-Fresh',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            {
                featuresTitle_en: '3D Card Stack Slider with Synchronized CSS Animations',
                featuresTitle_ru: '3D слайдер в виде стека карточек с синхронизированными CSS-анимациями',
                featuresDescription_en: "*A slider that simulates a 3D* stack of cards. *Built with React* to manage slide order and animate each card independently. Each card's CSS properties (scale, position, layer) change in sync to create a smooth depth effect *without using external libraries*.",
                featuresDescription_ru: "*Слайдер, имитирующий 3D* стек карточек. *Реализован на React* для управления порядком слайдов и независимой анимации каждой карточки. CSS-свойства каждой карточки (масштаб, позиция, слой) изменяются синхронно, создавая плавный эффект глубины *без использования сторонних библиотек*."
            },
            {
                featuresTitle_en: 'Responsive Design',
                featuresTitle_ru: 'Адаптивная вёрстка',
                featuresDescription_en: 'The entire interface adapts to all screen sizes — from mobile phones to desktop monitors. Layout, typography, and interactive elements scale and reposition for optimal viewing on any device.',
                featuresDescription_ru: 'Весь интерфейс адаптируется под все размеры экранов — от мобильных телефонов до мониторов. Макет, типографика и интерактивные элементы масштабируются и перестраиваются для комфортного просмотра на любом устройстве.'
            },
            {
                featuresTitle_en: 'Adaptive Product Grid with Dynamic Item Limit',
                featuresTitle_ru: 'Адаптивная сетка товаров с динамическим лимитом',
                featuresDescription_en: 'The product grid adapts its layout using *CSS Grid*. On mobile devices, only 3 items are shown with a "Show More" button to display the rest of the products.',
                featuresDescription_ru: 'Сетка товаров адаптирует макет с помощью *CSS Grid*. На мобильных устройствах показывается только 3 товара, кнопка "Показать ещё" раскрывает остальные продукты.'
            },
            {
                featuresTitle_en: 'Centralized Dark/Light Theme System',
                featuresTitle_ru: 'Централизованная система тёмной/светлой темы',
                featuresDescription_en: 'A single state in the root component controls the theme for the entire application. The theme value is passed via props to all child components, where it conditionally applies CSS classes to change colors, backgrounds, and even SVG icon styles consistently.',
                featuresDescription_ru: 'Единое состояние в корневом компоненте управляет темой для всего приложения. Значение темы передаётся через пропсы во все дочерние компоненты, где оно условно применяет CSS-классы для согласованного изменения цветов, фонов и стилей SVG-иконок.'
            },
            {
                featuresTitle_en: 'Component Architecture & SVG Icon System',
                featuresTitle_ru: 'Компонентная архитектура и система SVG-иконок',
                featuresDescription_en: 'The project uses a clear component-based structure. Data (products, reviews) is stored in separate JavaScript modules. All icons are implemented as inline SVG sprites *(<symbol>/<use>)*, allowing a single HTTP request and easy styling via CSS.',
                featuresDescription_ru: 'В проекте используется чёткая компонентная структура. Данные (товары, отзывы) вынесены в отдельные JavaScript-модули. Все иконки реализованы как инлайн SVG-спрайты *(<symbol>/<use>)*, что обеспечивает один HTTP-запрос и удобное управление стилями через CSS.'
            },
        ],
    },
    { 
        id: 7,
        slug: 'roman-numerals-converter',
        title_en: 'Roman Numerals Converter',
        title_ru: 'Конвертер Римских Чисел',
        mobile_title_en: 'Roman Numerals Converter',
        mobile_title_ru: 'Конвертер Римских Чисел',
        header_title_short_en: 'Converter',
        header_title_short_ru: 'Конвертер',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/7-roman_numerals_converter.jpg'),
        iconSkills: [ IconHTML, IconCSS, IconJS, ],
        description_en: 'A practical web application for converting between Roman and Arabic numerals. Features a bidirectional conversion algorithm in a single function, a fully custom UI built with a personal UI Kit, and interactive state feedback through visual controls.',
        description_ru: 'Практическое веб-приложение для конвертации римских и арабских чисел. Особенности: двусторонний алгоритм преобразования в одной функции, полностью кастомный интерфейс, построенный на личном UI Kit, и интерактивная обратная связь через визуальные элементы управления.',
        demo: 'https://mikevorobyev.github.io/Roman_Numerals_Converter/',
        gitHubLink: 'https://github.com/MikeVorobyev/Roman_Numerals_Converter',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            {
                featuresTitle_en: 'Mobile-First Adaptation',
                featuresTitle_ru: 'Адаптация под мобильные устройства',
                featuresDescription_en: 'Adapted the converter\'s layout and interface for comfortable use on mobile phones. All elements adjust to fit smaller screens.',
                featuresDescription_ru: 'Адаптировал вёрстку и интерфейс конвертера для удобного использования на мобильных телефонах. Все элементы подстраиваются под маленький экран.'
            },
            {
                featuresTitle_en: 'Real-World Application of Custom UI Kit',
                featuresTitle_ru: 'Практическое применение собственного UI Kit',
                featuresDescription_en: '*The converter interface is built entirely using components from the custom UI Kit*. It utilizes styled text fields *(`.input.press`)*, buttons *(`.button.active`)*, custom radio switches *(`.radio`)*, and all global CSS variables (design tokens), ensuring a consistent visual style and demonstrating the practical reuse of the component library.',
                featuresDescription_ru: '*Интерфейс конвертера полностью построен на компонентах из ранее созданного UI Kit*. Используются стилизованные текстовые поля *(`.input.press`)*, кнопки *(`.button.active`)*, кастомные радио-переключатели *(`.radio`)* и все глобальные CSS-переменные (дизайн-токены) для обеспечения единого визуального стиля и демонстрации практического переиспользования библиотеки компонентов.'
            },
            {
                featuresTitle_en: 'Bidirectional Conversion Algorithm',
                featuresTitle_ru: 'Двусторонний алгоритм конвертации чисел',
                featuresDescription_en: 'Implemented a single `solution()` function that analyzes the input data type and *performs conversion in both directions: from Arabic to Roman numerals and vice versa*. The algorithm correctly handles special subtractive notations (e.g., IV=4, IX=9) using a lookup object and conditional logic for both number types.',
                featuresDescription_ru: 'Реализована единая функция `solution()`, которая анализирует тип входных данных и *выполняет преобразование в обе стороны: из арабского числа в римское и из римской записи в арабскую*. Алгоритм корректно обрабатывает особые правила вычитания (например, IV=4, IX=9), используя объект для соответствий и условную логику для обоих типов чисел.'
            },
            {
                featuresTitle_en: 'Interactive UI State Management',
                featuresTitle_ru: 'Визуальная обратная связь через состояние интерфейса',
                featuresDescription_en: 'Clicking a conversion button triggers an automatic switch of the active radio button *(`checkbox.checked`)*. This provides clear visual feedback to the user, indicating the direction of the last performed conversion *(`Number ↔ Roman`)* and enhancing the interactive experience.',
                featuresDescription_ru: 'При нажатии на кнопку конвертации автоматически переключается активный радио-переключатель *(`checkbox.checked`)*. Это даёт пользователю чёткую визуальную подсказку о том, в каком направлении *(`Number ↔ Roman`)* было выполнено последнее преобразование, улучшая интерактивность.'
            },
            {
                featuresTitle_en: 'Input Handling and Validation',
                featuresTitle_ru: 'Обработка и ограничение пользовательского ввода',
                featuresDescription_en: 'The function logic includes input processing *(converting Roman numerals to uppercase, trimming spaces)*. The interface states the limitation of working with numbers up to 5000, which is managed by the user and accounted for in the algorithm (e.g., forming thousands with `M`).',
                featuresDescription_ru: 'Логика функции включает обработку ввода *(приведение римских цифр к верхнему регистру, обрезка пробелов)*. В интерфейсе указано ограничение на работу с числами не более 5000, что контролируется пользователем и учитывается алгоритмом формирования тысяч (например, `M`).'
            }
        ]
    },
    { 
        id: 6,
        slug: 'to-do',
        title_en: 'To Do',
        title_ru: 'Список дел',
        mobile_title_en: 'To Do',
        mobile_title_ru: 'Список дел',
        header_title_short_en: 'To Do',
        header_title_short_ru: 'Список дел',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/6-to_do.jpg'),
        iconSkills: [ IconHTML, IconCSS, IconBootstrap, IconJS, ],
        description_en: "A classic web application for managing a task list with data persistence in the browser's LocalStorage. Features a responsive design and a core set of task management functions.",
        description_ru: "Классическое веб-приложение для списка задач с сохранением данных в LocalStorage браузера. Обладает адаптивным дизайном и базовым набором функций для управления задачами.",
        demo: 'https://mikevorobyev.github.io/To-Do/',
        gitHubLink: 'https://github.com/MikeVorobyev/To-Do',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            {
                featuresTitle_en: 'LocalStorage persistence',
                featuresTitle_ru: 'Сохранение в LocalStorage',
                featuresDescription_en: 'Tasks stay after page reload. All data saves automatically to browser storage *(LocalStorage)*.',
                featuresDescription_ru: 'Задачи не пропадают после перезагрузки. Все данные автоматически сохраняются в хранилище браузера *(LocalStorage)*.'
            },
            {
                featuresTitle_en: 'Responsive Bootstrap layout',
                featuresTitle_ru: 'Адаптивная вёрстка на Bootstrap',
                featuresDescription_en: 'Uses *Bootstrap* grid and components for responsive design on all devices.',
                featuresDescription_ru: 'Использует сетку и компоненты *Bootstrap* для адаптивного дизайна на всех устройствах.'
            }
        ]
    },
    { 
        id: 5,
        slug: 'dental-tooth',
        title_en: 'Dental Tooth',
        title_ru: 'Dental Tooth',
        mobile_title_en: 'Dental Tooth',
        mobile_title_ru: 'Dental Tooth',
        header_title_short_en: 'Dental Tooth',
        header_title_short_ru: 'Dental Tooth',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/5-dental_tooth.jpg'),
        iconSkills: [ IconHTML, IconCSS, IconJS, IconJQuery, IconFigma, IconAdobePhotoshop, ],
        description_en: 'The project includes layout coding, JavaScript for interactivity, and library integration. Key elements: responsive interface using Grid/Flexbox, slider management (Swiper.js), modal windows (jQuery Magnific Popup), graphics optimization (SVG sprites), and several custom scripts.',
        description_ru: 'Проект включает вёрстку по макету, JavaScript для интерактивности и работу с библиотеками. Основные элементы: адаптивный интерфейс на Grid/Flexbox, управление слайдерами (Swiper.js), модальные окна (jQuery Magnific Popup), оптимизация графики (SVG спрайты) и несколько кастомных скриптов.',
        demo: 'https://mikevorobyev.github.io/Dental_Tooth/',
        gitHubLink: 'https://github.com/MikeVorobyev/Dental_Tooth',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            {
                featuresTitle_en: 'Adaptive Layout with CSS Grid and Flexbox',
                featuresTitle_ru: 'Адаптивная вёрстка на CSS Grid и Flexbox',
                featuresDescription_en: 'Fully responsive interface using *CSS Grid* for complex layouts and *Flexbox* for component alignment. The design adapts to all screen sizes with optimized breakpoints.',
                featuresDescription_ru: 'Полностью адаптивный интерфейс, использующий *CSS Grid* для сложных макетов и *Flexbox* для выравнивания компонентов. Дизайн адаптируется под все размеры экранов с оптимизированными контрольными точками.'
            },
            {
                featuresTitle_en: 'Animated Mobile Menu',
                featuresTitle_ru: 'Анимированное мобильное меню',
                featuresDescription_en: 'Custom hamburger menu with smooth transform animations between open/close states, changing the page layout.',
                featuresDescription_ru: 'Кастомное гамбургер-меню с плавными анимациями перехода между состояниями открыто/закрыто, меняющее структуру макета страницы.'
            },
            {
                featuresTitle_en: 'Custom Swiper.js Navigation with Dedicated Controller Sliders',
                featuresTitle_ru: 'Кастомная навигация Swiper.js с отдельными слайдерами-контроллерами',
                featuresDescription_en: 'The reviews section features a unique slider implementation: the main content slider is synchronized with two additional Swiper instances that serve solely as navigation controllers, creating a custom navigation interface separate from the content area.',
                featuresDescription_ru: 'В разделе отзывов реализована уникальная схема слайдера: основной слайдер с контентом синхронизирован с двумя дополнительными экземплярами Swiper, которые функционируют исключительно как контроллеры навигации, создавая интерфейс управления, отдельный от области контента.'
            },
            {
                featuresTitle_en: 'Dynamic Breadcrumbs with Viewport-based Text Truncation',
                featuresTitle_ru: 'Динамические "хлебные крошки" с обрезкой текста на основе viewport',
                featuresDescription_en: 'Breadcrumb links automatically truncate with ellipsis (...) on narrow screens (<700px). *A resize event listener recalculates and updates the text*, restoring the full text when the viewport widens. This is implemented with manual DOM text manipulation rather than CSS text-overflow.',
                featuresDescription_ru: 'Ссылки в "хлебных крошках" автоматически обрезаются с добавлением многоточия (...) на узких экранах (<700px). *Обработчик события resize пересчитывает и обновляет текст*, восстанавливая полный текст при расширении viewport. Реализовано с помощью ручного манипулирования текстом DOM, а не через CSS text-overflow.'
            },
            {
                featuresTitle_en: 'Demo: Live Comment Count with Grammatical Adaptation',
                featuresTitle_ru: 'Демо: живой счетчик комментариев с грамматической адаптацией',
                featuresDescription_en: 'Implemented a demo module that simulates live comment counts to showcase dynamic UI adaptation. Every 2 seconds, random numbers are generated and *the interface automatically selects the correct grammatical ending for the word "comment" in Russian ("комментарий")*, demonstrating real-time text formatting based on numerical values.',
                featuresDescription_ru: 'Реализован демонстрационный модуль, имитирующий живое количество комментариев для наглядной демонстрации адаптации интерфейса. Каждые 2 секунды генерируются случайные числа, и *интерфейс автоматически подбирает правильное грамматическое окончание для слова "комментарий"*, показывая форматирование текста в реальном времени на основе числовых значений.'
            },
            {
                featuresTitle_en: 'Modal Window Implementation with Magnific Popup & jQuery',
                featuresTitle_ru: 'Реализация модального окна с использованием Magnific Popup и jQuery',
                featuresDescription_en: 'The consultation request form opens in a modal popup using the *Magnific Popup jQuery plugin*. The configuration includes custom opening animations (via data-effect attributes), removal delays for smooth transitions, and a callback to apply animation classes before opening.',
                featuresDescription_ru: 'Форма заявки на консультацию открывается в модальном окне с использованием *jQuery*-плагина *Magnific Popup*. Конфигурация включает пользовательские анимации открытия (через data-effect атрибуты), задержки удаления для плавных переходов и callback для применения классов анимации перед открытием.'
            },
            {
                featuresTitle_en: 'SVG Sprite System for Icons and Logo with CSS Custom Properties',
                featuresTitle_ru: 'Система SVG-спрайтов для иконок и логотипа с CSS-переменными',
                featuresDescription_en: 'All icons and the complex multi-part logo are implemented as inline SVG sprites using the *<symbol>/<use>* pattern. This ensures a single HTTP request for all graphics. Colors are controlled via CSS custom properties (variables), and hover effects are applied directly through CSS to SVG elements.',
                featuresDescription_ru: 'Все иконки и сложный многокомпонентный логотип реализованы как инлайн SVG-спрайты с использованием паттерна *<symbol>/<use>*. Это гарантирует единственный HTTP-запрос для всей графики. Цвета управляются через CSS-переменные, а эффекты наведения применяются напрямую через CSS к элементам SVG.'
            },
            {
                featuresTitle_en: 'CSS Parallax Effect: Simulating a Mirror Reflection',
                featuresTitle_ru: 'CSS-параллакс эффект: имитация отражения в зеркале',
                featuresDescription_en: '*A layered image composition* (tooth, mirror and its reflection) uses a *parallax effect on hover*. Each of the three layers moves with a different offset, creating a realistic illusion of spatial depth and a dynamic mirror-like reflection.',
                featuresDescription_ru: '*Многослойная композиция* (зуб, зеркало и его отражение) использует *параллакс-эффект при наведении*. Каждый из трёх слоёв сдвигается с различным смещением, создавая реалистичную иллюзию пространственной глубины и динамического зеркального отражения.'
            },
        ]
    },
    { 
        id: 4,
        slug: 'ui-kit',
        title_en: 'Ui Kit',
        title_ru: 'Ui Kit',
        mobile_title_en: 'Ui Kit',
        mobile_title_ru: 'Ui Kit',
        header_title_short_en: 'Ui Kit',
        header_title_short_ru: 'Ui Kit',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/4-ui_kit.jpg'),
        iconSkills: [ IconHTML, IconCSS, IconFigma, ],
        description_en: 'A comprehensive dark-themed UI Kit built as a modular design system. Features a centralized style configuration with CSS variables, a unified visual state system, custom CSS form controls, and complex SVG-based components like progress indicators and tooltips.',
        description_ru: 'Полноценный UI Kit в тёмной теме, построенный как модульная дизайн-система. Особенности: централизованная настройка стилей через CSS-переменные, унифицированная система визуальных состояний, кастомные элементы формы на CSS и сложные компоненты на SVG, такие как индикаторы прогресса и подсказки.',
        demo: 'https://mikevorobyev.github.io/ui_kit/',
        gitHubLink: 'https://github.com/MikeVorobyev/ui_kit',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            {
                featuresTitle_en: 'Centralized Style Configuration System',
                featuresTitle_ru: 'Централизованная система настроек стиля',
                featuresDescription_en: 'All colors, sizes, shadows, and border radii are defined through shared CSS Custom Properties (e.g., `--button_size: 60px`, `--button_shadow`). This allows for changing the visual appearance of the entire component set by modifying values in a single place.',
                featuresDescription_ru: 'Все цвета, размеры, тени и скругления заданы через общие CSS-переменные в начале файла (например, `--button_size: 60px`, `--button_shadow`). Чтобы изменить внешний вид всего набора компонентов, достаточно поправить значения в одном месте.'
            },
            {
                featuresTitle_en: 'Unified Visual State System for Components',
                featuresTitle_ru: 'Унифицированная система визуальных состояний компонентов',
                featuresDescription_en: 'Buttons, input fields, and other elements use the same state modifier classes: `.default`, `.hover`, `.press`, and `.active`. This creates a consistent and predictable interactive behavior across the entire interface.',
                featuresDescription_ru: 'Для кнопок, полей ввода и других элементов используются одни и те же классы состояний: `.default` (обычный), `.hover` (при наведении), `.press` (нажатый), `.active` (активный). Это делает поведение интерфейса единым и предсказуемым.'
            },
            {
                featuresTitle_en: 'Custom CSS-Only Form Controls',
                featuresTitle_ru: 'Кастомные элементы формы на чистом CSS',
                featuresDescription_en: 'Standard form elements (checkboxes, switches, radio buttons) are completely restyled using CSS. Their default appearance is replaced with custom designs built from scratch with pseudo-elements, while maintaining native functionality and accessibility.',
                featuresDescription_ru: 'Стандартные элементы форм (чекбоксы, переключатели, радио-кнопки) полностью переделаны с помощью CSS. Их привычный вид скрыт, а новый создан с нуля с помощью псевдоэлементов, при этом сами элементы остаются рабочими и доступными. У переключателей есть плавная анимация.'
            },
            {
                featuresTitle_en: 'Complex Components with SVG Graphics',
                featuresTitle_ru: 'Сложные компоненты с использованием SVG-графики',
                featuresDescription_en: 'Circular progress indicators are built with SVG `<circle>` and controlled via the CSS `stroke-dasharray` property. Tooltips and chat message bubbles utilize custom SVG images as graphical "tails" for precise and detailed styling that is difficult to achieve with CSS alone.',
                featuresDescription_ru: 'Круговые индикаторы прогресса созданы на SVG (`<circle>`) и управляются через CSS-свойство `stroke-dasharray`. Всплывающие подсказки (tooltip) и пузыри сообщений в чате используют кастомные SVG-изображения в качестве графических "хвостиков" для более точного и сложного оформления.'
            }
        ]
    },
    { 
        id: 3,
        slug: 'Organic-Juicy-Co',
        title_en: 'Organic Juicy Co',
        title_ru: 'Organic Juicy Co',
        mobile_title_en: 'Organic Juicy Co',
        mobile_title_ru: 'Organic Juicy Co',
        header_title_short_en: 'Juicy',
        header_title_short_ru: 'Juicy',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/3-organic_juicy_co.jpg'),
        iconSkills: [ IconHTML, IconCSS, IconJS, IconFigma, ],
        description_en: 'A vibrant web project built on a complex adaptive CSS Grid. Features include a custom JavaScript slider system, an animated mobile menu, dynamic SVG logo effects with CSS Nesting, and optimized SVG sprites.',
        description_ru: 'Яркий веб-проект, построенный на сложной адаптивной CSS Grid. Ключевые особенности: собственная система слайдеров на JavaScript, анимированное мобильное меню, динамические эффекты для SVG-логотипа с CSS Nesting и оптимизированные SVG-спрайты.',
        demo: 'https://mikevorobyev.github.io/Organic_Juicy_Co/',
        gitHubLink: 'https://github.com/MikeVorobyev/Organic_Juicy_Co',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            {
                featuresTitle_en: 'Complex Responsive Layout with CSS Grid',
                featuresTitle_ru: 'Комплексный адаптивный макет на CSS Grid',
                featuresDescription_en: '*A sophisticated, multi-row and multi-column CSS Grid layout forms the core of the page.* It features several major breakpoints where the *grid-template-areas* property is completely redefined, leading to a radical yet smooth visual restructuring of all content blocks for optimal viewing on any device.',
                featuresDescription_ru: '*Основу страницы формирует сложная многострочная и многоколоночная CSS Grid-сетка.* Она включает несколько основных контрольных точек, на которых свойство *grid-template-areas* полностью переопределяется, что приводит к кардинальной, но плавной перестройке визуальной структуры всех блоков контента для оптимального просмотра на любом устройстве.'
            },
            {
                featuresTitle_en: 'JavaScript Slider Implementation',
                featuresTitle_ru: 'Реализация слайдеров на JavaScript',
                featuresDescription_en: 'Created sliders with different navigation types: classic forward/back arrows, bottom dots for direct selection, and a minimalist version with a single button. Manages image rotation and updates the active control state.',
                featuresDescription_ru: 'Сделаны слайдеры с разной навигацией: классические стрелки «вперёд/назад», точки для прямого выбора слайда и минималистичный вариант с одной кнопкой. Управляет переключением изображений и обновляет состояние активного элемента управления.'
            },
            {
                featuresTitle_en: 'Mobile Burger Menu',
                featuresTitle_ru: 'Бургер-меню для мобильной версии',
                featuresDescription_en: 'A responsive menu for mobile screens. The burger icon animates into a close icon using CSS transforms. Toggles page scroll lock and header layout when opened.',
                featuresDescription_ru: 'Адаптивное меню для мобильных экранов. Иконка-бургер анимируется в иконку закрытия с помощью CSS-трансформаций. При открытии блокирует прокрутку страницы и меняет вёрстку шапки.'
            },
            {
                featuresTitle_en: 'Dynamic Logo Color Effect',
                featuresTitle_ru: 'Эффект динамической смены цветов логотипа',
                featuresDescription_en: 'Implemented a dynamic color change effect for the SVG logo. On hover, its parts transition to different colors using *CSS Nesting* syntax *(`logo:hover { .element {} }`)* and CSS custom properties for each graphic element (path, circle).',
                featuresDescription_ru: 'Для SVG-логотипа в футере реализован эффект смены цвета частей при наведении. Использован *Nesting CSS* синтаксис вложенности *(`логотип:hover { .элемент {} }`)*, чтобы назначить через CSS-переменные отдельные цвета для каждого графического элемента (path, circle).'
            },
            {
                featuresTitle_en: 'CSS Architecture Inspired by BEM Methodology',
                featuresTitle_ru: 'Архитектура CSS, вдохновлённая методологией БЭМ',
                featuresDescription_en: 'The project\'s CSS is structured using naming conventions inspired by the BEM (Block, Element, Modifier) methodology. This approach provides clear semantics, reduces style conflicts, and improves code maintainability, pragmatically adapting the methodology to the project\'s specific layout needs.',
                featuresDescription_ru: 'CSS проекта структурирован с использованием правил именования, вдохновлённых методологией БЭМ (Блок, Элемент, Модификатор). Этот подход обеспечивает понятную семантику, снижает конфликты стилей и улучшает поддерживаемость кода, прагматично адаптируя методологию под конкретные задачи вёрстки проекта.'
            },
            {
                featuresTitle_en: 'Optimized SVG Integration via <use>',
                featuresTitle_ru: 'Оптимизированная интеграция SVG через <use>',
                featuresDescription_en: 'All icons and the complex logo are implemented as an SVG sprite. Graphic elements are defined as *<symbol>* in a single file and reused throughout the layout with *<use href="...">*. This approach reduces the number of HTTP requests, ensures visual consistency, and allows styling (e.g., color) of all instances via CSS.',
                featuresDescription_ru: 'Все иконки и сложный логотип реализованы как SVG-спрайт. Графические элементы определяются как *<symbol>* в одном файле и многократно вставляются в разметку с помощью *<use href="...">*. Этот подход сокращает количество HTTP-запросов, обеспечивает единообразие и позволяет управлять стилями (например, цветом) всех экземпляров из CSS.'
            },
        ]
    },
    { 
        id: 2,
        slug: 'oculus', 
        title_en: 'Oculus',
        title_ru: 'Oculus',
        mobile_title_en: 'Oculus',
        mobile_title_ru: 'Oculus',
        header_title_short_en: 'Oculus',
        header_title_short_ru: 'Oculus',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/2-oculus.jpg'),
        iconSkills: [ IconHTML, IconCSS, IconJS, IconFigma, IconAdobePhotoshop, ],
        description_en: 'A promotional landing page for Meta Quest 2, featuring an adaptive layout, semantic HTML5 structure, and advanced CSS techniques including a custom Grid framing system, gradient text effects, a layered Photoshop composition, and a CSS-animated banner.',
        description_ru: 'Промо-лендинг для Meta Quest 2 с адаптивной вёрсткой, семантической структурой HTML5 и продвинутыми CSS-приёмами: кастомной системой рамок на Grid, эффектами градиентного текста, многослойной композицией с обработанным в Photoshop изображением и анимированным CSS-баннером.',
        demo: 'https://mikevorobyev.github.io/oculus/',
        gitHubLink: 'https://github.com/MikeVorobyev/oculus',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            { 
                featuresTitle_en: 'Cross-Device Adaptive Layout:', 
                featuresTitle_ru: 'Адаптивная вёрстка для разных устройств:', 
                featuresDescription_en: 'The site features a flexible, adaptive layout that ensures correct display and usability across the most common device breakpoints (mobile, tablet, desktop). Layout adjustments are made using CSS media queries, providing a user-friendly experience on any screen.',  
                featuresDescription_ru: 'Для сайта реализована гибкая, адаптивная вёрстка, которая обеспечивает корректное отображение и удобство использования на основных разрешениях экранов (мобильные, планшеты, десктоп). Перестройка макета осуществляется с помощью CSS медиазапросов, что гарантирует комфортное взаимодействие с контентом на любом устройстве', 
            },
            { 
                featuresTitle_en: 'Semantic HTML5 Foundation:', 
                featuresTitle_ru: 'Семантическая основа на HTML5:', 
                featuresDescription_en: 'The page is built on a semantic HTML5 foundation using *<header>*, *<nav>*, and *<section>* tags for key structural blocks. Meaningful heading hierarchy *(<h1>-<h6>)* and proper *<a>* links enhance accessibility, SEO, and code maintainability.',  
                featuresDescription_ru: 'Страница построена на семантической основе HTML5 с использованием тегов *<header>*, *<nav>* и *<section>* для ключевых структурных блоков. Осмысленная иерархия заголовков *(<h1>-<h6>)* и корректные ссылки *<a>* улучшают доступность, SEO и поддерживаемость кода.', 
            },
            { 
                featuresTitle_en: 'CSS Grid Layout with a Custom Dynamic Framing System:', 
                featuresTitle_ru: 'Макет на CSS Grid с кастомной системой динамического обрамления:', 
                featuresDescription_en: 'The *"IN THE BOX"* section is structured using *CSS Grid* for an orderly and responsive component layout. Within this grid, a custom framing technique is implemented: a dedicated element is absolutely positioned over each image container. Its dimensions are precisely calculated with *calc(100% - 40px)* to maintain consistent internal padding, while the visual border is created using *outline* and *outline-offset* properties. This combination ensures perfectly adaptive and uniform frames around product images of varying sizes.',  
                featuresDescription_ru: 'Секция *"IN THE BOX"* построена с использованием *CSS Grid* для создания упорядоченного и отзывчивого макета компонентов. Внутри этой сетки применяется собственная техника обрамления: поверх каждого контейнера с изображением абсолютно позиционируется специальный элемент. Его размеры точно вычисляются формулой *calc(100% - 40px)* для сохранения постоянных внутренних отступов, а видимая граница создаётся свойствами *outline* и *outline-offset*. Такое сочетание гарантирует идеально адаптивное и единообразное обрамление для товарных изображений любого размера.', 
            },
            { 
                featuresTitle_en: 'CSS Text Clipping for Gradient Effects:', 
                featuresTitle_ru: 'Обрезка фона по тексту для градиентных эффектов на CSS:', 
                featuresDescription_en: 'A visual effect is implemented where a gradient background is clipped to the shape of text elements using the *-webkit-background-clip: text* property in combination with *-webkit-text-fill-color: transparent*. This technique enables the creation of custom-styled typography.',  
                featuresDescription_ru: 'Реализован эффект, при котором задний фон с градиентом обрезается по форме текстовых элементов с помощью свойства *-webkit-background-clip: text* в сочетании с *-webkit-text-fill-color: transparent*. Это позволяет создавать кастомно стилизованную типографику.', 
            },
            { 
                featuresTitle_en: 'Custom Image Alpha Channel & Layered Animation:', 
                featuresTitle_ru: 'Создание альфа-канала и многослойная анимация:', 
                featuresDescription_en: 'The original Oculus headset image was processed in *Adobe Photoshop* to introduce transparency in the lens areas. The resulting custom PNG is integrated into the layout, enabling the absolutely positioned and animated "OCULUS" text layer to pass behind it. This technique creates a convincing parallax-like depth effect and serves as a distinctive visual signature for the promotional section.',  
                featuresDescription_ru: 'Исходное изображение шлема Oculus было обработано в *Adobe Photoshop* для создания прозрачности в областях линз. Полученное кастомное PNG интегрировано в вёрстку, что позволяет абсолютно позиционированному и анимированному текстовому слою "OCULUS" перемещаться на заднем плане. Этот приём создаёт убедительный эффект глубины, подобный параллаксу, и служит уникальной визуальной особенностью промо-секции.', 
            },
            { 
                featuresTitle_en: 'Animated «Metaverse Loading» Banner:', 
                featuresTitle_ru: 'Анимированный баннер «Metaverse Loading»:', 
                featuresDescription_en: 'A custom animated banner was created for the promotional section. The animation is built with CSS *@keyframes* to control the sequential fading of graphic elements, producing a gentle pulsing effect that signifies activity and loading within the thematic "Metaverse" context.',  
                featuresDescription_ru: 'Для промо-секции создан кастомный анимированный баннер. Анимация построена на CSS *@keyframes*, управляющих последовательным затуханием графических элементов, что создаёт мягкий пульсирующий эффект, обозначающий активность и загрузку в рамках тематики "Metaverse".', 
            },
        ],
    },
    { 
        id: 1,
        slug: 'simple-calculator', 
        title_en: 'Simple Calculator',
        title_ru: 'Простой калькулятор',
        mobile_title_en: 'Simple Calculator',
        mobile_title_ru: 'Простой Калькулятор',
        header_title_short_en: 'Calculator',
        header_title_short_ru: 'Калькулятор',
        subtitle_en: 'Frontend',
        subtitle_ru: 'Frontend',
        screenshot: require('../../images/projects_images/image_portfolio/1-simple-calculator.jpg'),
        iconSkills: [ IconHTML, IconCSS, IconJS ],
        description_en: 'A smart web calculator that handles complex, multi-operation expressions (like 5 + 3 × 2) with correct order of operations. Features a clean, fully responsive interface with robust input error prevention and clear user feedback for a seamless calculation experience on any device.',
        description_ru: 'Умный веб-калькулятор для вычисления сложных выражений (например, 5 + 3 × 2) с соблюдением правильного порядка действий. Имеет чистый, полностью адаптивный интерфейс, надёжно предотвращает ошибки ввода и предоставляет пользователю понятные подсказки для комфортной работы на любом устройстве.',
        demo: 'https://mikevorobyev.github.io/simple-calculator-/',
        gitHubLink: 'https://github.com/MikeVorobyev/simple-calculator-',
        videoYouTube: 'https://www.youtube.com/embed/QlPuT0hry2Y',
        videoRuTube: 'https://rutube.ru/play/embed/95a07e89c17ef6d847338afa312f3ccc/',
        mainFeatures: [
            { 
                featuresTitle_en: 'Responsive Design:', 
                featuresTitle_ru: 'Адаптивный дизайн:', 
                featuresDescription_en: 'This responsive calculator ensures precise and accessible operation on any device, from desktop monitors to mobile screens.',  
                featuresDescription_ru: 'Этот адаптивный калькулятор обеспечивает точный и доступный расчёт на любом устройстве — от монитора компьютера до экрана смартфона.', 
            },
            { 
                featuresTitle_en: 'Multi-Operation Expression Evaluation:', 
                featuresTitle_ru: 'Вычисление сложных выражений в одну строку:', 
                featuresDescription_en: 'Performs complex, multi-step calculations in a single input line. The calculator *correctly processes chained operations* like *5 + 3 x 2 - 11 = 0* by automatically following the standard mathematical order of operations *(PEMDAS/BODMAS)*, delivering the accurate result without requiring intermediate steps.',  
                featuresDescription_ru: 'Выполняет многоэтапные вычисления в одной строке ввода. Калькулятор *корректно обрабатывает цепочки операций*, например *5 + 3 x 2 - 11 = 0*, автоматически следуя стандартному математическому порядку действий *(умножение/деление перед сложением/вычитанием)*, и выдаёт точный результат без необходимости промежуточных вычислений', 
            },
                        { 
                featuresTitle_en: 'Input Error Prevention & Clear Feedback:', 
                featuresTitle_ru: 'Предотвращение ошибок ввода и понятные сообщения:', 
                featuresDescription_en: 'The interface is designed to prevent logical errors and provide clear guidance. It intelligently handles scenarios like consecutive operator presses (e.g., ++), division by zero, and incomplete expressions by either ignoring invalid inputs or displaying intuitive messages (e.g., "Cannot divide by zero"), ensuring a smooth and frustration-free user experience.',  
                featuresDescription_ru: 'Интерфейс спроектирован так, чтобы предотвращать логические ошибки и давать пользователю чёткие подсказки. Он корректно обрабатывает ситуации вроде нажатия нескольких операторов подряд (например, ++), деления на ноль или незавершённого выражения — либо игнорируя некорректный ввод, либо выводя интуитивно понятные сообщения (например, «На ноль делить нельзя»). Это обеспечивает плавный и комфортный процесс вычислений.', 
            },
        ],
    },
];

export default projects

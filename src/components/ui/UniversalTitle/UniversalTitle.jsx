import { useColorStore, useLanguageStore, useThemeStore } from '../../../stores'
import styles from './universalTitle.module.scss'

// Памятка по использованию компонента UniversalTitle:
//
// ОСНОВНЫЕ ПРОПСЫ:
//   customClass={styles.custom}    - Кастомные CSS-классы для адаптации и медиа-запросов(передаются из родительского компонента)
//   level='h2'                     - HTML-тег заголовка: h1 | h2 | h3 | h4 | h5 | h6
//   align='left'                   - Выравнивание: 'left' | 'center' | 'right'
//
// НАСТРОЙКИ ШРИФТА:
//   fontFamily='var(--font-brand)' - Семейство шрифта
//   fontSize='74px'                - Размер шрифта (inline-стиль, можно не добавлять и управлять стилем из css родителя с помощью 'customClass={styles.custom}')
//   fontWeight={700}               - Насыщенность шрифта


// ---------------------------------------------------------------------------------------------
// СИСТЕМА ЦВЕТОВ И ТЕКСТА:
//   titleText_en={[...]}           - Массив объектов для английской версии
//   titleText_ru={[...]}           - Массив объектов для русской версии
//
// ФОРМАТ ОБЪЕКТОВ ТЕКСТА:
//   { title: 'ТЕКСТ ЗАГОЛОВКА' }                               // 🔄  Если не передаем 'color' ---> Акцентный цвет (default)
//   { title: 'ТЕКСТ ЗАГОЛОВКА', color: ['#000', '#FFF'] }  // 🎨 Меняется с темой [dark, light]
//   { title: 'ТЕКСТ ЗАГОЛОВКА', color: 'red' }                 // ⚫ Фиксированный цвет
//   { title: 'ТЕКСТ ЗАГОЛОВКА', break: true }                  // 📏 Принудительный перенос строки
// ---------------------------------------------------------------------------------------------

// ★ ДЛЯ АДАПТИВНОСТИ используйте customClass + CSS медиа-запросы
// ★ Inline-стили (fontSize) имеют высший приоритет над CSS

const UniversalTitle = ({ 
    customClass  = '',
    level        = 'h2', 
    fontFamily   = '', 
    fontSize     = '', 
    fontWeight   = '',
    lineHeight   = '', 
    align, 
    titleText_en = [ { title: 'TITLE',     color: ['#000', '#FFF'] }], 
    titleText_ru = [ { title: 'ЗАГОЛОВОК', color: ['#000', '#FFF'] }]
}) => {
    const { language } = useLanguageStore()
    const { currentColor } = useColorStore()
    const { theme } = useThemeStore()
    const Tag = level

    const getColor = (colorConfig) => {
        switch(true) {
            case colorConfig && typeof colorConfig === 'string': return colorConfig                                        // ⚫ Фиксированный цвет    
            case Array.isArray(colorConfig)                    : return theme === 'dark' ? colorConfig[1] : colorConfig[0] // 🎨 Меняем цвет по теме  
            default                                            : return `var(--accent-text-${currentColor})`               // 🔄 Акцентный цвет (default)
        }
    }

    const renderText = (textArray) => 
        textArray.flatMap((obj, index) => [
            <Tag 
                key={index}
                className={`${styles.title} ${customClass}`}
                style={{
                    fontSize, 
                    fontFamily, 
                    fontWeight,
                    lineHeight,
                    color: getColor(obj.color),
                }}
            >
                {obj.title}
            </Tag>,
            obj.break && <div key={`break-${index}`} style={{flexBasis: '100%', height: 0}} />
        ]).filter(Boolean)

    return (
        <div 
            className={styles.title_wrapper} 
            style={{
                justifyContent: align === 'right'  ? 'flex-end' : 
                                align === 'center' ? 'center'   : 'flex-start'
            }}
        >
            {language === 'en' ? renderText(titleText_en) : renderText(titleText_ru)}
        </div>
    )
}

export default UniversalTitle
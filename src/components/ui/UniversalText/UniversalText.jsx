import { useState, useEffect } from 'react'
import { useColorStore, useLanguageStore, useThemeStore } from '../../../stores'

import styles from './universalText.module.scss'

// Памятка по использованию компонента UniversalText:
//
// ОСНОВНЫЕ ПРОПСЫ:
//   customClass={styles.custom}    - Кастомные CSS-классы для адаптации и медиа-запросов(передаются из родительского компонента)
//   contentText={aboutText}        - Объект с двумя ключами 'en' и 'ru', с английской  русской версиями текста. { en: 'English text', ru:'Русский текст' }
//   variant='full'                 - Режим отображения: 'short' (50% текста) | 'full' (весь текст)
//   enableAccent={false}           - Флаг для включения и выключения цветной разметки текста между маркерами-звездочками ---> *Текст Текст Текст*
//
// НАСТРОЙКИ ШРИФТА:
//   fontFamily='var(--font-primary)' - CSS-переменная или значение шрифта
//   fontSize='16px'                  - Размер шрифта (inline-стиль)
//   fontWeight={400}                 - Насыщенность шрифта

// ---------------------------------------------------------------------------------------------
// СИСТЕМА ЦВЕТОВ:
//  - Массив с двумя цветами для темной и светлой темы, если ередать только 1 цвет, то смены цвета при смене темы не будет.

//   color={['#fff', '#000']}       - [цвет_для_тёмной_темы, цвет_для_светлой_темы]
//   color={['#333']}                 - [единый_цвет] - не меняется при смене темы
//   color={['white']}                  - цвет по умолчанию
// ---------------------------------------------------------------------------------------------

// АКЦЕНТНОЕ ВЫДЕЛЕНИЕ:
//   Оберните слова в *звёздочки* для автоматического выделения:
//   "Это *важный текст* будет цветным при enableAccent={true}"

// ★ ДЛЯ АДАПТИВНОСТИ используйте customClass + CSS медиа-запросы
// ★ Inline-стили (fontSize) имеют высший приоритет над CSS
// ★ При enableAccent={false} текст в *звёздочках* отображается обычным цветом

const UniversalText = ({
    customClass  = '',
    fontFamily   = '', 
    fontSize     = '', 
    fontWeight   = '',
    color        = [ 'white' ],
    enableAccent = false, 
    contentText  = { en: 'Text', ru: 'Текст' }, 
    variant      = 'full' 
}) => {
    const { language }     = useLanguageStore()
    const { currentColor } = useColorStore()
    const { theme }        = useThemeStore()

    const [content, setContent] = useState([])
    const sentenceCount = contentText[language].split('.').length // Подсчет количества предложений в тексте

    useEffect(() => {
        const text = contentText[language] || '' // Либо русская версия текста, либо английская
        const processedText = variant === 'short' 
            ? text.split('.').slice(0, sentenceCount / 2).join('.') + '.'
            : text

        // Парсим акцентные части
        const parts = processedText.split(/(\*.*?\*)/g)

        let colorText = color[0]
        if(color.length > 1) { colorText = theme === 'dark' ? color[0] : color[1] }
        
        const parsedContent = parts.map((part, index) => {
            if (part.startsWith('*') && part.endsWith('*')) {
                // Выделенный акцентным цветом текст(выделяем в самом тексте с помощью символа звездочка ---> *Текст*)
                return (
                    <span 
                        key={'from_the_marker_' + index}
                        style={{ color: enableAccent ? `var(--accent-text-${currentColor})` : `${colorText}`, fontSize, fontFamily, fontWeight }}
                        className={`${styles.accentText} ${customClass}`}
                    >
                        {part.slice(1, -1)}
                    </span>
                )
            }
            // Обычный текст
            return <span key={'without_a_marker_'+ index} style={{ fontSize, fontFamily, fontWeight, color: `${colorText}` }}>{part}</span> 
        })

        setContent(parsedContent)
    }, [language, currentColor, theme])

    return (
        <p className={`${styles.text} ${customClass}`}>{content}</p>
    )
}

export default UniversalText
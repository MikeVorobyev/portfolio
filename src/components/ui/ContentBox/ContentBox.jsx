import { useState, useEffect } from 'react';
import { useColorStore, useThemeStore } from '../../../stores';
import styles from './contentBox.module.scss';

// Памятка по использованию компонента ContentBox:
//
// ОСНОВНЫЕ ПРОПСЫ:
//   children                        - Контент внутри контейнера
//   settings={{...}}                - Базовые стили (десктопная версия)
//   media={{...}}                   - Медиа-запросы для адаптации
//
// БАЗОВЫЕ НАСТРОЙКИ (settings):
//   maxWidth: '100%'                - Максимальная ширина
//   minHeight: '300px'              - Минимальная высота  
//   padding: '0px'                  - Внутренние отступы
//   alignItems: 'start'             - Выравнивание по cross-axis
//   justifyContent: 'center'        - Выравнивание по main-axis
//   flexDirection: 'row'            - Направление flex-контейнера
//   gap: '20px'                     - Расстояние между элементами
//   borderRadius: '10px'            - Скругление углов
//   background: ''                  - Фон (пусто = градиент)
//
// СИСТЕМА МЕДИА-ЗАПРОСОВ (media):
//   '(max-width: 1200px)': { styles } - Стили для планшетов
//   '(max-width: 768px)': { styles }  - Стили для мобильных
//   '(max-width: 480px)': { styles }  - Стили для маленьких экранов
//
// ГРАДИЕНТНАЯ СИСТЕМА:
//   Автоматически применяется градиент на основе currentColor
//   '--gradient-${currentColor}-primary'   - Основной цвет градиента
//   '--gradient-${currentColor}-secondary' - Вторичный цвет градиента

// ★ Градиент автоматически меняется при смене currentColor
// ★ Медиа-запросы автоматически применяются при изменении размера окна

const ContentBox = ({ 
    customClass  = '',
    settings = {}, 
    media = {},
    shadowOpacity = 0.1,
    children 
}) => {
    const { currentColor } = useColorStore()
    const { theme } = useThemeStore()
    const [finalSettings, setFinalSettings] = useState({})
    const [isFirstRender, setIsFirstRender] = useState(true)

    useEffect(() => {
        setIsFirstRender(false)
    }, [])

    const applyMediaQueries = () => {
        const baseSettings = {
            maxWidth: '100%',
            minHeight: '300px',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'stretch',
            gap: '20px',
            borderRadius: '10px 10px 10px 10px',
            '--gradient-primary': `var(--gradient-${currentColor}-primary)`,
            '--gradient-secondary': `var(--gradient-${currentColor}-secondary)`,
            background: '',
            '--shadow-color': theme === 'dark' ? '' : `var(--accent-text-${currentColor})`,
            '--shadow-opacity': shadowOpacity,
        }

        let newSettings = { ...baseSettings, ...settings };
        
        Object.entries(media).forEach(([query, queryStyles]) => {
            if (window.matchMedia(query).matches) {
                newSettings = { ...newSettings, ...queryStyles };
            }
        });
        
        setFinalSettings(newSettings);
    }

    useEffect(() => {
        applyMediaQueries();
        window.addEventListener('resize', applyMediaQueries);
        return () => window.removeEventListener('resize', applyMediaQueries);
    }, [currentColor, theme, shadowOpacity])

    return (
        <div 
            className={`
                ${styles.contentBox} 
                ${isFirstRender ? '' : styles.gradient_transition} 
                ${customClass}`
            } 
            style={finalSettings}
        >
            {children}
        </div>
    )
}

export default ContentBox
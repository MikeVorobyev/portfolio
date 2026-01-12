import { useColorStore, useLanguageStore, useThemeStore } from '../../../../stores'
import styles from './languageToggle.module.scss'


const LanguageToggle = ({ customClass, isMobileSize = false }) => {
    const { language, toggleLanguage } = useLanguageStore()
    const { currentColor } = useColorStore()
    const { theme }        = useThemeStore()

    return (
        <div className={`${styles.switch_lang_hover_time}`}>
            <button 
                onClick={toggleLanguage}
                className={`
                    ${styles.switch_lang} 
                    ${styles.gradient_transition} 
                    ${language === 'en' ? styles.english : styles.russian}
                    ${isMobileSize ? theme === 'dark'  ? styles.dark    : styles.white : ''}`}
                style={{
                    '--gradient-primary': `var(--gradient-${currentColor}-primary)`,
                    '--gradient-secondary': `var(--gradient-${currentColor}-secondary)`
                }}
            >
                {language === 'en' ? 'EN' : 'RU'}
                
            </button>
        </div>
    )
}

export default LanguageToggle
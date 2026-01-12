
import { useThemeStore  } from '../../../../stores'
import styles from './themeToggle.module.scss'

import lightIMG from '../../../../images/themeToggle/light.png'                      // Картинка включенной лампочки
import lightIMG_rays from '../../../../images/themeToggle/The_rays_of_the_lamp.png'  // Картинка лучей для включенной лампочки
import darkIMG from '../../../../images/themeToggle/dark.png'                        // Картинка выключенной лампочки

const ThemeToggle = () => {
    const { theme, toggleTheme } = useThemeStore()

    return (
        <button
            onClick={toggleTheme} 
            className={styles.switch_theme}
        >
          <img 
            className={`
                ${styles.switch_theme_IMG} 
                ${styles.light_IMG}
                ${theme === 'light' ? styles.visible : styles.hidden}`} 
            src={lightIMG} 
            alt="light theme" />

          <img 
            className={`
                ${styles.switch_theme_IMG} 
                ${styles.lightIMG_rays}
                ${theme === 'light' ? styles.visible : styles.hidden}`} 
            src={lightIMG_rays} 
            alt="light theme rays" />

          <img 
            className={`
                ${styles.switch_theme_IMG} 
                ${styles.dark_IGM}
                ${theme === 'dark' ? styles.visible : styles.hidden}`} 
            src={darkIMG}  
            alt="dark theme" />
        </button>
    )
}

export default ThemeToggle
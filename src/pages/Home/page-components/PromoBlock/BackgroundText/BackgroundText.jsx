import { useColorStore, useThemeStore } from '../../../../../stores'

import styles from './backgroundText.module.scss'

const BackgroundText = () => {
    const { currentColor } = useColorStore()
    const { theme } = useThemeStore()

    return (
        <div 
            className={`${styles.backgroundText} ${theme === 'dark' ? styles.textBlack : styles.textWhite}`}
            style={theme === 'dark' ? {textShadow: `0px 0px 3px var(--accent-text-${currentColor})`} : {color: `var(--accent-text-${currentColor})`}}   
        >
            <div className={styles.bg_designer}>DESIGNER UI DESIGNER UI</div>
            <div className={styles.bg_frontend}>FRONTEND DEVELOPER FRONTEND DEVELOPER</div>
        </div>
    )
}


export default BackgroundText
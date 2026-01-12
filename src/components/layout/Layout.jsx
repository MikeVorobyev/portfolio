import { useColorStore, useThemeStore } from '../../stores'

import Header from "./Header/Header"
import Footer from "./Footer/Footer"

import styles from './layout.module.scss'

const Layout = ({ children }) => {
    const { currentColor } = useColorStore()
    const { theme } = useThemeStore()

    return (     
        <div 
            className={`${styles.layout} ${theme === 'dark' ? styles.dark_bg_transition : styles.light_bg_transition}`}
            style={{
                '--dark-bg-primary': `var(--dark-${currentColor}-primary)`,
                '--dark-bg-secondary': `var(--dark-${currentColor}-secondary)`,
                '--light-bg-primary': `var(--light-bg-${currentColor}-primary)`,
                '--light-bg-secondary': `var(--light-bg-${currentColor}-secondary)`
            }}
        >
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>
                    {children}
                </main>
                <Footer/>
            </div>
        </div>    
    )
}

export default Layout
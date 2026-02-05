import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useColorStore, useThemeStore, useLanguageStore, useWidthWindowStore } from '../../../stores'

import ThemeToggle from '../../ui/buttons/ThemeToggle/ThemeToggle'
import LanguageToggle from '../../ui/buttons/LanguageToggle/LanguageToggle'
import UniversalButton from '../../ui/buttons/UniversalButton/UniversalButton'

import styles from './header.module.scss'

const Header = () => {
    const { language }              = useLanguageStore()
    const { currentColor }          = useColorStore()
    const { theme }                 = useThemeStore()
    const { isMobile }              = useWidthWindowStore()
    const location                  = useLocation();
    const [ openMenu, setOpenMenu ] = useState(false)
    const getLayoutElement = () => document.querySelector('[class*="layout"]') // Получаем компонент c классом layout

    // ==============================================================================================================
    // Постоянно скролит вверх при переходе(клике) на страницы в меню навинации
    function scrollTop() {
        sessionStorage.removeItem('returnScroll')
        sessionStorage.removeItem('returnPath')
        sessionStorage.setItem('returnPath', location.pathname)
        const layout = getLayoutElement()
        layout.scrollTop = 0
    }
    // ==============================================================================================================
  
    // ==============================================================================================================
    // Слушатель для срабатывания эффекта стекла на хэдэре при скроле вниз, чтобы было видно лучше
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = (event) => { setScrolled(event.target.scrollTop > 50) } // будет true и добавит класс для эффекта секла в scss 

        const layout = getLayoutElement()
        layout.addEventListener('scroll', handleScroll)
        return () => layout.removeEventListener('scroll', handleScroll)
    }, [])
    // ==============================================================================================================

    if(isMobile) {
        return (
            <header className={
               `${styles.header} 
                ${styles.isMobile_header} 
                ${openMenu ? styles.open : ''}
                ${openMenu ? styles.scrolled : ''}  
                ${scrolled ? styles.scrolled : ''} 
                ${theme === 'dark' ? styles.scrolledDark : styles.scrolledWhite}`}
            >
                <nav className={styles.navigation}>
                    <ThemeToggle />

                    
                        <div className={`${styles.links_wrapper} ${openMenu ? styles.open_links : ''}`}>
                            <NavLink 
                                to='/'
                                // eslint-disable-next-line no-sequences
                                onClick={() => (scrollTop(), setOpenMenu((prev) => !prev))}
                                className={
                                   `${styles.nav_link} 
                                    ${styles.nav_link_hover_time}
                                    ${language === 'en' ? styles.english : styles.russian}
                                    ${theme === 'dark' ? styles.textWhite : styles.textBlack}
                                    ${theme === 'dark' ? styles.bg_dark : styles.bg_white}`
                                }
                                style={({ isActive }) => ({color: isActive ? `var(--accent-text-${currentColor})`: ''})}
                            >
                                {language === 'en' ? 'Home' : 'Главная'}
                            </NavLink>

                            <NavLink 
                                to='/about'
                                // eslint-disable-next-line no-sequences
                                onClick={() => (scrollTop(), setOpenMenu((prev) => !prev))}
                                className={
                                `${styles.nav_link} 
                                    ${styles.nav_link_hover_time}
                                    ${language === 'en' ? styles.english : styles.russian}
                                    ${theme === 'dark' ? styles.textWhite : styles.textBlack}
                                    ${theme === 'dark' ? styles.bg_dark : styles.bg_white}`
                                }
                                style={({ isActive }) => ({color: isActive ? `var(--accent-text-${currentColor})`: ''})}
                            >
                                {language === 'en' ? 'About' : 'Обо мне'}
                            </NavLink>

                            <NavLink 
                                to='/projects'
                                // eslint-disable-next-line no-sequences
                                onClick={() => (scrollTop(), setOpenMenu((prev) => !prev))}
                                className={
                                `${styles.nav_link} 
                                    ${styles.nav_link_hover_time}
                                    ${language === 'en' ? styles.english : styles.russian}
                                    ${theme === 'dark' ? styles.textWhite : styles.textBlack}
                                    ${theme === 'dark' ? styles.bg_dark : styles.bg_white}`
                                }
                                style={({ isActive }) => ({color: isActive ? `var(--accent-text-${currentColor})`: ''})}
                            >
                                {language === 'en' ? 'Projects' : 'Проекты'}
                            </NavLink>

                            <NavLink 
                                to='/contact' 
                                // eslint-disable-next-line no-sequences
                                onClick={() => (scrollTop(), setOpenMenu((prev) => !prev))}
                                className={
                                `${styles.nav_link}
                                    ${styles.nav_link_hover_time} 
                                    ${language === 'en' ? styles.english : styles.russian}
                                    ${theme === 'dark' ? styles.textWhite : styles.textBlack}
                                    ${theme === 'dark' ? styles.bg_dark : styles.bg_white}`
                                }
                                style={({ isActive }) => ({color: isActive ? `var(--accent-text-${currentColor})`: ''})}
                            >
                                {language === 'en' ? 'Contact' : 'Контакты'}
                            </NavLink>
                        </div>

                    <div className={styles.navigation_right_btns}>
                        <LanguageToggle isMobileSize = {true} />

                        <div onClick = {() => setOpenMenu((prev) => !prev)} className={styles.button_navigation_wrapper}>
                            <UniversalButton customClass={styles.button_navigation}>
                                <div className={`${styles.stick} ${styles.stick_top}    ${openMenu ? styles.open : ''} ${theme === 'dark' ? styles.dark : styles.white}`}></div>
                                <div className={`${styles.stick} ${styles.stick_center} ${openMenu ? styles.open : ''} ${theme === 'dark' ? styles.dark : styles.white}`}></div>
                                <div className={`${styles.stick} ${styles.stick_bottom} ${openMenu ? styles.open : ''} ${theme === 'dark' ? styles.dark : styles.white}`}></div>
                            </UniversalButton>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${theme === 'dark' ? styles.scrolledDark : styles.scrolledWhite}`}>
            <nav className={styles.navigation}>
                <ThemeToggle />

                <NavLink 
                    to='/'
                    onClick={scrollTop}
                    className={
                       `${styles.nav_link} 
                        ${styles.nav_link_hover_time}
                        ${language === 'en' ? styles.english : styles.russian}
                        ${theme === 'dark' ? styles.textWhite : styles.textBlack}`// Смена цвета текста
                    }
                    style={({ isActive }) => ({color: isActive ? `var(--accent-text-${currentColor})`: ''})}
                >
                  {language === 'en' ? 'Home' : 'Главная'}
                </NavLink>

                <NavLink 
                    to='/about'
                    onClick={scrollTop}
                    className={
                       `${styles.nav_link} 
                        ${styles.nav_link_hover_time}
                        ${language === 'en' ? styles.english : styles.russian}
                        ${theme === 'dark' ? styles.textWhite : styles.textBlack}`// Смена цвета текста 
                    }
                    style={({ isActive }) => ({color: isActive ? `var(--accent-text-${currentColor})`: ''})}
                >
                  {language === 'en' ? 'About' : 'Обо мне'}
                </NavLink>

                <NavLink 
                    to='/projects'
                    onClick={scrollTop}
                    className={
                       `${styles.nav_link} 
                        ${styles.nav_link_hover_time}
                        ${language === 'en' ? styles.english : styles.russian}
                        ${theme === 'dark' ? styles.textWhite : styles.textBlack}`// Смена цвета текста
                    }
                    style={({ isActive }) => ({color: isActive ? `var(--accent-text-${currentColor})`: ''})}
                >
                  {language === 'en' ? 'Projects' : 'Проекты'}
                </NavLink>

                <NavLink 
                    to='/contact' 
                    onClick={scrollTop}
                    className={
                       `${styles.nav_link}
                        ${styles.nav_link_hover_time} 
                        ${language === 'en' ? styles.english : styles.russian}
                        ${theme === 'dark' ? styles.textWhite : styles.textBlack}`// Смена цвета текста
                    }
                    style={({ isActive }) => ({color: isActive ? `var(--accent-text-${currentColor})`: ''})}
                >
                  {language === 'en' ? 'Contact' : 'Контакты'}
                </NavLink>

                <LanguageToggle />
            </nav>
        </header>
    )
}


export default Header
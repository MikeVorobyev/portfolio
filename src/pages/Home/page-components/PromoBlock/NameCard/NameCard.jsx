import { useState, useEffect } from 'react'
import { useColorStore, useThemeStore, useLanguageStore } from '../../../../../stores'

import IconGithub from '../../../../../components/icons/IconGithub/IconGithub'
import IconVK from '../../../../../components/icons/IconVK/IconVK'

import { getRandomIndex } from '../../../../../utils/getRandomIndex'
import { phrases } from './phrases'

import styles from './nameCard.module.scss'



const NameCard = () => {
    const { language }     = useLanguageStore()
    const { currentColor } = useColorStore()
    const { theme }        = useThemeStore()
    
    const [currentPhrase, setCurrentPhrase] = useState(() => phrases[language][getRandomIndex(phrases[language].length)])
    const [isChanging, setIsChanging]       = useState(false)

    
    // -------------------------------------------------------------------------------------------------------------------------------------------------
    // Вариант для браузера FireFox
    useEffect(() => {
        if (/firefox|fxios/i.test(navigator.userAgent)) {
            const changeWithFade = () => {
                setIsChanging(true) // Включаем fadeOut
                
                setTimeout(() => {
                    let indx = getRandomIndex(phrases[language].length)
                    setCurrentPhrase(prev => 
                        prev === phrases[language][indx] 
                            ? phrases[language][indx <= 1 ? indx + 1 : indx - 1] 
                            : phrases[language][indx]
                    )
                    
                    // Через 50мс включаем fadeIn (после установки новой фразы)
                    setTimeout(() => setIsChanging(false), 50)
                }, 700) // Ждём завершения fadeOut
            }
            
            // Первый запуск сразу
            changeWithFade()
            
            // Затем каждые 10 секунд
            const firefoxTimer = setInterval(changeWithFade, 10000)
            
            return () => clearInterval(firefoxTimer)
        }
    }, [language])
    // -------------------------------------------------------------------------------------------------------------------------------------------------


    useEffect(() => {
        setIsChanging(true)
        
        const timer = setTimeout(() => {
            let indx = getRandomIndex(phrases[language].length)
            setCurrentPhrase((prev) => prev === phrases[language][indx] 
                                                    ? phrases[language][indx <= 1 ? indx + 1 : indx - 1] 
                                                    : phrases[language][indx])
            setIsChanging(false)
        }, 700)
        
        return () => clearTimeout(timer)
    }, [currentColor, language])

    return (
        <div className={`${styles.nameCard} ${theme === 'dark' ? '' : styles.shadowOn}`} style={{color: `var(--accent-text-${currentColor})`}}>
            <p className={`${styles.greeting} ${language === 'en'? styles.english : styles.russian}`}>{language === 'en'? "Hey There I'm" : "Привет, я"}</p>
            <h1 className={styles.logoName}>MIKLE</h1>

            <div
               className={`
                ${styles.description_wrapper} 
                ${language === 'en'? styles.english : styles.russian}
                ${isChanging ? styles.fadeOut : styles.fadeIn}`
                }
            >
                <p className={`${styles.description}`}>{currentPhrase}</p>
            </div>

            <div className={`${styles.socialLinks} ${styles.shadowOn}`}>
                <a 
                    className={styles.vk}
                    href="https://vk.com/id730297370"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconVK  size={54} color={`var(--accent-text-${currentColor})`} />
                </a>
                
                <a 
                    className={styles.github}
                    href="https://github.com/MikeVorobyev" 
                    target="_blank"           // Открывает ссылку в новой вкладке браузера.
                    rel="noopener noreferrer" // Важно для безопасности, чтобы новая вкладка не могла получить доступ к контексту твоей страницы, а также не передавала данные о источнике перехода
                >
                    <IconGithub size={54} color={`var(--accent-text-${currentColor})`} />
                </a>
            </div>
        </div>
    )
}

export default NameCard

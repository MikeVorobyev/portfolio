import { useWidthWindowStore, useLanguageStore } from '../../stores'
import PageTitle from '../../components/ui/PageTitle/PageTitle'
import ContentBox from '../../components/ui/ContentBox/ContentBox'
import UniversalText from '../../components/ui/UniversalText/UniversalText'
import UniversalTitle from '../../components/ui/UniversalTitle/UniversalTitle'
import UniversalButton from '../../components/ui/buttons/UniversalButton/UniversalButton'

import styles from './notFound.module.scss'

const NotFound = () => {
    const { language }     = useLanguageStore()
    const { widthWindow }  = useWidthWindowStore()
    const getLayoutElement = () => document.querySelector('[class*="layout"]') // Получаем компонент c классом layout


    function scrollTop() {
        sessionStorage.removeItem('returnScroll')
        sessionStorage.removeItem('returnPath')
        const layout = getLayoutElement()
        layout.scrollTop = 0
    }


    return (
        <div className={`${styles.notFound}`}>
            <PageTitle 
                pageTitle_en = {`${widthWindow <= 480 ? 'NOT FOUND'  : 'PAGE NOT FOUND'}`} 
                pageTitle_ru = {`${widthWindow <= 768 ? 'НЕ НАЙДЕНО' : 'СТРАНИЦА НЕ НАЙДЕНА'}`}
            />

            <ContentBox customClass = {styles.content}>
                <UniversalText 
                    customClass = {styles.text}
                    fontFamily   = { language === 'en' ? 'var(--font-title-en)' : 'var( --font-title-ru)' }
                    fontWeight   = { 400 }
                    enableAccent = { true }
                    contentText  = {{
                        en: 'The page you are looking for does not exist or has been moved.', 
                        ru: 'Запрашиваемая страница не существует или была перемещена.' 
                    }}
                />

                <div onClick={scrollTop} className={styles.home_btn_wrapper}>
                    <UniversalButton 
                        customClass  = {styles.home_btn}
                        to           = {'/'}
                    >
                        <UniversalTitle
                            customClass  = {styles.home_btn_txt}
                            fontFamily   = { language === 'en' ? 'var( --font-button-secondary-en)' : 'var( --font-button-secondary-ru)' }
                            fontWeight   = { 400 }
                            align        = {'center'}
                            titleText_en = {[ { title: 'Go to Homepage', color: '#FFF' }]}
                            titleText_ru = {[ { title: 'Перейти на главную', color: '#FFF' }]}
                        />
                    </UniversalButton>
                </div>
            </ContentBox>
        </div>
    )
}

export default NotFound
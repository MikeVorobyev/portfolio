import { useLanguageStore, useThemeStore, useWidthWindowStore } from '../../../../../stores'
import styles from './mainFeatures.module.scss'
import UniversalTitle from '../../../../ui/UniversalTitle/UniversalTitle'
import UniversalText from '../../../../ui/UniversalText/UniversalText'
import ContentBox from '../../../../ui/ContentBox/ContentBox'

const MainFeatures = ({ mainFeatures }) => {
    const { theme }       = useThemeStore()
    const { language }    = useLanguageStore()
    const { widthWindow } = useWidthWindowStore()

    return (
        <ContentBox
            customClass={styles.mainFeatures}
            settings = {{
                flexDirection: '',
                alignItems: '',
                minHeight: '0px',
                background: `${theme === 'dark' ? 'var(--bg-color-dark)' : '#fff'}`,
            }}
        >
            <UniversalTitle
                customClass={styles.title}
                fontFamily   = { language === 'en' ? 'var( --font-button-secondary-en)' : 'var( --font-button-secondary-ru)' }
                fontWeight   = { 700 } 
                align        = { '' }
                titleText_en = { [{ title: 'Main Features'}] }
                titleText_ru = { [{ title: 'Детали реализации'}] }
            />

            <ul
                className={styles.list}
                style={{
                    color: `${theme === 'dark' ? '#fff' : '#000'}`,
                    listStyleType: `${widthWindow <= 480 ? 'none' : ''}`,
                }}
            >
                {mainFeatures.map(({                        
                        featuresTitle_en, 
                        featuresTitle_ru, 
                        featuresDescription_en, 
                        featuresDescription_ru 
                    }, i) => 

                    <li key={i}>
                        <UniversalTitle
                            customClass={styles.list_title} 
                            level        = {'h3'}
                            fontFamily   = { language === 'en' ? 'var( --font-button-secondary-en)' : 'var( --font-button-secondary-ru)' }
                            fontWeight   = { 700 }
                            titleText_en = { [{ title: featuresTitle_en, color: ['#000', '#FFF'] }] }
                            titleText_ru = { [{ title: featuresTitle_ru, color: ['#000', '#FFF'] }] }
                        />

                        <UniversalText
                            customClass={styles.list_description}  
                            color        = { ['#8B949E', '#4e4e4e'] }
                            fontFamily   = { language === 'en' ? 'var( --font-button-secondary-en)' : 'var( --font-button-secondary-ru)' }
                            fontWeight   = { 400 }
                            contentText  = { { 
                                en: featuresDescription_en, 
                                ru: featuresDescription_ru 
                            } } 
                        />
                    </li>    
                )}
            </ul>
        </ContentBox>
    )
}

export default MainFeatures
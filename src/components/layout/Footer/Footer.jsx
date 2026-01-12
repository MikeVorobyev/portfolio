import { useThemeStore, useLanguageStore, useColorStore } from '../../../stores'
import styles from './footer.module.scss'
import ContentBox from '../../ui/ContentBox/ContentBox'
import UniversalTitle from '../../ui/UniversalTitle/UniversalTitle'
import UniversalText from '../../ui/UniversalText/UniversalText'


import LogoFooter from '../../icons/LogoFooter/LogoFooter'


const Footer = () => {
    const { theme }        = useThemeStore()
    const { language }     = useLanguageStore()
    const { currentColor } = useColorStore()
   
    return (
        <div className={styles.footer_wrapper}>
            <ContentBox 
                customClass  = {styles.footer}
                settings = {{
                'minHeight': '0px',
                'borderRadius': '10px 10px 0px 0px',
                'background': `${theme === 'dark' ? 'var(--bg-color-dark)' : 'white'}`,
                }}
            >
                <ContentBox 
                    customClass  = {styles.logoFooter_container}
                    settings = {{
                        'minHeight': '0px',
                        'flexDirection': 'column',
                        'boxShadow': 'none',
                        'background': 'none',
                    }}
                >  
                <div className={`${styles.logoFooter_wrapper} ${styles.shadowOn}`}>
                    <LogoFooter 
                        customClass = {`${styles.logoFooter}`} 
                        widthSize = { 220 } 
                        heightSize = { 210 } 
                        color={`var(--accent-text-${currentColor})`}
                    />
                </div>
                </ContentBox>

                <ContentBox 
                    settings = {{
                        'minHeight': '0px',
                        'flexDirection': 'column',
                        'alignItems': 'end',
                        'justifyContent': 'space-between',
                        'boxShadow': 'none',
                        'background': 'none',
                        'textAlign': 'right',
                        'gap': '20px'
                    }}
                >

                    <UniversalTitle 
                        customClass  = { styles.footerTitle }
                        level        = {'h3'}
                        align        = { 'right' }
                        fontFamily   = { language === 'en' ? 'var(--font-brand-en)' : 'var(--font-brand-ru)' }
                        fontWeight   = { 700 }
                        titleText_en = {[ 
                            { title: 'Designing the', color: ['#000', '#FFF'] },
                            { title: 'extraordinary', break: true },
                            { title: 'one',           color: ['#000', '#FFF'] },
                            { title: 'pixel'},
                            { title: 'at a time.',    color: ['#000', '#FFF'] },
                        ]}
                        titleText_ru = {[ 
                            { title: 'Создаю',            color: ['#000', '#FFF'] },
                            { title: 'необычное,', break: true },
                            { title: 'один',              color: ['#000', '#FFF'] },
                            { title: 'пиксель'},
                            { title: 'за раз.',           color: ['#000', '#FFF'] },
                        ]}
                    />

                    <div className={styles.footerText_wrapper}>
                        <UniversalText
                            color={['rgba(99, 107, 115, 1)', 'var(--bg-color-dark)']}
                            customClass  = { styles.footerText }    
                            fontFamily   = {'var(--font-subtitle-en)'}  
                            contentText  = {{ 
                                en: 'Development & Design: Mikle © 2026', 
                                ru: 'Разработка и дизайн: Mikle © 2026' 
                            }} 
                        />
                        <UniversalText
                            color={['rgba(99, 107, 115, 1)', 'var(--bg-color-dark)']}
                            customClass  = { styles.footerText }
                            fontFamily   = {'var(--font-subtitle-en)'}  
                            contentText  = {{ 
                                en: 'Based on original concept by Rahul © 2024', 
                                ru: 'На основе оригинальной концепции Rahul © 2024' 
                            }} 
                        />
                    </div>
                </ContentBox>
            </ContentBox>
        </div>
)
}

export default Footer
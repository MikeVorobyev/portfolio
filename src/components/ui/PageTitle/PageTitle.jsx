import styles from './pageTitle.module.scss'
import UniversalTitle from '../UniversalTitle/UniversalTitle'
import UniversalButton from '../buttons/UniversalButton/UniversalButton'
import ContentBox from '../ContentBox/ContentBox'
import { useThemeStore, useLanguageStore, useColorStore } from '../../../stores'


const PageTitle = ({ 
    pageTitle_en, 
    pageTitle_ru, 
    customClass,
    shadowOpacity = 0.1,
 }) => {
    const { theme }        = useThemeStore()
    const { language }     = useLanguageStore()
    const { currentColor } = useColorStore()

    return (
        <div 
            className={`${styles.pageTitle} ${customClass}`}
            style={{
                '--shadow-color': theme === 'dark' ? '' : `var(--accent-text-${currentColor})`,
                '--shadow-opacity': shadowOpacity,
            }}
        >
            <ContentBox
                customClass  = {styles.left_bg}
                settings = {{
                    'maxWidth': '',
                    'minHeight': '',
                    'borderRadius': '10px 0px 0px 10px',
                    'background': `${theme === 'dark' ? 'var(--bg-color-dark)' : 'rgba(255, 255, 255, 1)'}`,
                }} 
            ></ContentBox>

            <div className={`${styles.back_btn_wrapper}`}>
                <UniversalButton 
                    customClass  = {`${styles.back_btn}`}
                    back         = { true }
                    settings     = {{
                        'boxShadow': 'none',
                    }}
                >
                    <UniversalTitle
                        customClass  = {styles.back_btn_txt}
                        fontFamily   = { language === 'en' ? 'var(--font-text-en)' : 'var(--font-text-ru)' }
                        fontWeight   = { 400 }
                        align        = {'center'}
                        titleText_en = {[ { title: '← Back', color: '#FFF' }]}
                        titleText_ru = {[ { title: '← Назад', color: '#FFF' }]}
                    />
                </UniversalButton>
            </div>

           <div className={styles.decorAngle_wrapper}>   {/* Декоративный внутренний скругленный угол */}
                <svg className={styles.decorAngle} viewBox="0 0 11.0001 130" xmlns="http://www.w3.org/2000/svg" width="11" height="130">
                    <path fill={theme === 'dark' ? 'var(--bg-color-dark)' : 'rgba(255, 255, 255, 1)'} 
                        d="M10.5524 0L9.50014 8.69694e-05C9.50014 8.69694e-05 9.4999 7.24624 9.5001 12.1268C9.50019 14.4006 7.86589 16.3078 4.73156 16.3077C1.59723 
                        16.3077 0.447864 16.3078 0.000102997 16.3078L0 130L11.0002 130L10.5524 0Z" transform="matrix(1,0,0,-1,0,130)" 
                    />
                </svg>
            </div>

            <ContentBox
                customClass  = {styles.right_bg}
                settings = {{
                    'maxWidth': '',
                    'minHeight': '',
                    'borderRadius': '0px 10px 10px 10px',
                    'background': `${theme === 'dark' ? 'var(--bg-color-dark)' : 'rgba(255, 255, 255, 1)'}`,
                }} 
            >
            </ContentBox>

            <UniversalTitle
                customClass  = {styles.title}
                fontFamily   = { language === 'en' ? 'var(--font-brand-en)' : 'var(--font-brand-ru)' } 
                titleText_en = {[ { title: pageTitle_en, color: ['#000', '#FFF'] }]}
                titleText_ru = {[ { title: pageTitle_ru, color: ['#000', '#FFF'] }]}
            />
        </div>
    )
}

export default PageTitle
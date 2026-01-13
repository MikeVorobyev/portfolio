import { useLanguageStore } from '../../../../stores'

import ContentBox from '../../../../components/ui/ContentBox/ContentBox'
import UniversalTitle from '../../../../components/ui/UniversalTitle/UniversalTitle'
import UniversalText from '../../../../components/ui/UniversalText/UniversalText'
import UniversalButton from '../../../../components/ui/buttons/UniversalButton/UniversalButton'
import IconVK from '../../../../components/icons/IconVK/IconVK'
import IconGithub from '../../../../components/icons/IconGithub/IconGithub'
import IconCodewars from '../../../../components/icons/IconCodewars/IconCodewars'
import IconTelegram from '../../../../components/icons/IconTelegram/IconTelegram'
import IconMail from '../../../../components/icons/IconMail/IconMail'

import styles from './contactSection.module.scss'



const ContactSection = () => {
    const { language } = useLanguageStore()
    return (
        <ContentBox
            customClass  = { styles.contactSection }
            settings = {{
                'justifyContent': 'space-between',
                'minHeight': '0px',
            }} 
        >
            <ContentBox 
                customClass  = { styles.left_box }
                settings = {{
                    'flexDirection': 'column',
                    'justifyContent': 'space-between',
                    'gap': '30px',
                    'boxShadow': 'none',
                    'background': 'none',
                    'maxWidth': '445px',
                    'minHeight': '0px',
                }}
            >
                <UniversalTitle
                    customClass  = { `${styles.left_box_title} ${language === 'en' ? '' : styles.left_box_title_ru}` } 
                    level        = { 'h3' }
                    fontFamily   = { language === 'en' ? 'var(--font-brand-en)' : 'var(--font-brand-ru)' }
                    fontWeight   = { language === 'en' ? 700 : 400 }
                    lineHeight   = { '' }
                    titleText_en = {[ { title: 'Get in Touch', color: 'rgba(22, 27, 34, 1)' }]}
                    titleText_ru = {
                        [ 
                            { title: 'Свяжитесь', color: 'rgba(22, 27, 34, 1)', break: true },
                            { title: 'со мной',   color: 'rgba(22, 27, 34, 1)' }
                        ]
                    }
                />
                <UniversalText
                    customClass  = { styles.left_box_text } 
                    fontFamily   = {'var(--font-subtitle-en)'}
                    color        = { ['rgba(22, 27, 34, 1)'] }  
                    contentText  = {{
                        en: 'If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.', 
                        ru: 'Если вас заинтересовали мои работы или есть отзывы о сайте, я открыт для обмена идеями.' 
                    }}
                />
            </ContentBox>
                
            <ContentBox 
                customClass  = { styles.right_box }
                settings = {{
                    'flexDirection': '',
                    'justifyContent': 'space-between',
                    'alignItems': '',
                    'gap': '30px',
                    'boxShadow': 'none',
                    'background': 'none',
                    'minHeight': '0px',
                }}
            >
                <div className={styles.top_box}>
                    <UniversalTitle 
                        customClass  = { styles.top_box_title }
                        level        = { 'h4' }
                        titleText_en = {[ { title: 'Find me here', color: 'rgba(22, 27, 34, 1)' }]}
                        titleText_ru = {[ { title: 'Контакты',  color: 'rgba(22, 27, 34, 1)' }]}
                    />

                    <div className={`${styles.social}`}>
                        <UniversalButton
                            customClass = {styles.social_vk}
                            href = { "https://vk.com/id730297370" }
                            settings={{
                                'boxShadow': 'none',
                                'filter': 'drop-shadow(var(--text-shadow-light))',
                                'background': 'none'
                            }}
                        >
                            <IconVK customClass = {styles.social_vk} size={38} color={'rgba(22, 27, 34, 1)'} />
                        </UniversalButton>

                        <UniversalButton
                            customClass = {styles.social_github}
                            href     = { "https://github.com/MikeVorobyev"} 
                            settings = {{
                                'boxShadow': 'none',
                                'filter': 'drop-shadow(var(--text-shadow-light))',
                                'background': 'none'
                            }}
                        >
                            <IconGithub customClass = {styles.social_github} className={styles.github} size={38} color={'rgba(22, 27, 34, 1)'} />
                        </UniversalButton>

                        <UniversalButton
                            customClass = {styles.social_codewars}
                            href     = { "https://www.codewars.com/users/MikhailVi1"} 
                            settings = {{
                                'boxShadow': 'none',
                                'filter': 'drop-shadow(var(--text-shadow-light))',
                                'background': 'none'
                            }}
                        >
                            <IconCodewars customClass = {styles.social_codewars} className={styles.codewars} size={38} color={'rgba(22, 27, 34, 1)'} />
                        </UniversalButton>

                        <UniversalButton
                            customClass = {styles.social_mail}
                            to         = { '/contact' }
                            saveScroll = { true }
                            settings   = {{
                                'boxShadow': 'none',
                                'filter': 'drop-shadow(var(--text-shadow-light))',
                                'background': 'none'
                            }}
                        >
                            <IconMail customClass = {styles.social_mail} className={styles.mail} size={38} color={'rgba(22, 27, 34, 1)'} />
                        </UniversalButton>
                    </div>
                </div>

                <div className={styles.bottom_box}>
                    <UniversalButton 
                        customClass  = { styles.bottom_box_btn }
                        href         = { "https://t.me/MikhailVi1"} 

                    >
                        <div className = {styles.btn_content_container}>
                            <UniversalText
                                customClass  = { styles.bottom_box_text }
                                fontFamily   = { 'var(--font-subtitle-en)' }
                                fontWeight   = { 700 }
                                color        = { ['rgba(22, 27, 34, 1)'] }  
                                contentText  = {{
                                    en: 'Contact me', 
                                    ru: 'Написать мне' 
                                }}
                           />

                           <IconTelegram customClass = {styles.telegram} size={25} color={'rgba(22, 27, 34, 1)'} />
                        </div>
                    </UniversalButton>
                </div>
            </ContentBox>

        </ContentBox>
    )
}

export default ContactSection
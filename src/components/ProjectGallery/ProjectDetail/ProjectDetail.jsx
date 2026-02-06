import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLanguageStore, useColorStore, useWidthWindowStore } from '../../../stores'
import projects from '../projectsData'
import styles from './projectDetail.module.scss'
import PageTitle from '../../ui/PageTitle/PageTitle'
import MainFeatures from './ProjectDetailComponents/MainFeatures/MainFeatures'
import ContentBox from '../../ui/ContentBox/ContentBox'
import VideoPreview from './ProjectDetailComponents/VideoPreview/VideoPreview'
import UniversalTitle from '../../ui/UniversalTitle/UniversalTitle'
import UniversalText from '../../ui/UniversalText/UniversalText'
import UniversalButton from '../../ui/buttons/UniversalButton/UniversalButton'
import IconDemo from '../../icons/IconDemo/IconDemo'
import IconGithub from '../../icons/IconGithub/IconGithub'

const ProjectDetail = () => {
    const { language }     = useLanguageStore()
    const { currentColor } = useColorStore()
    const { widthWindow }  = useWidthWindowStore()
    const { slug }         = useParams()
    const project          = projects.find(p => p.slug === slug)
    const { 
        title_en, 
        title_ru,
        mobile_title_en,
        mobile_title_ru,
        header_title_short_en,
        header_title_short_ru,
        subtitle_en,
        subtitle_ru,
        description_en,
        description_ru,
        mainFeatures,
        videoYouTube, 
        videoRuTube,
        iconSkills,
        demo,
        gitHubLink,
    } = project

    const descriptionWrapperRef = useRef(null)
    const [showBorder, setShowBorder] = useState(false)
    useEffect(() => {
        const resizeDescriptionWrapper = new ResizeObserver((arr) => {
            const heightWrapper = arr[0].contentRect.height
            if(heightWrapper >= 150) setShowBorder(true)
            else setShowBorder(false)
        })

        resizeDescriptionWrapper.observe(descriptionWrapperRef.current)
        return () => resizeDescriptionWrapper.disconnect()
    }, [])

    return (
        <div className={styles.projectDetail}>
            <PageTitle 
                pageTitle_en = { widthWindow > 992 ? title_en.toUpperCase() : header_title_short_en.toUpperCase() } 
                pageTitle_ru = { widthWindow > 992 ? title_ru.toUpperCase() : header_title_short_ru.toUpperCase() }
            />

            <div className={styles.content_wrapper}>
                <ContentBox
                    customClass={styles.left_box}
                    settings = {{
                        flexDirection: '',
                        alignItems: '',
                        minHeight: '250px',
                        background: 'none',
                        boxShadow: 'none',
                    }}
                >
                    <VideoPreview videoYouTube={videoYouTube} videoRuTube={videoRuTube} />
                </ContentBox>

                <ContentBox
                    customClass={styles.right_box}
                    settings = {{
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '250px',
                        gap: '',
                        alignItems: '',
                        background: 'none',
                        boxShadow: 'none',
                    }}
                >
                    <div className={styles.all_text_container}>
                        <UniversalTitle
                            customClass  = { styles.title }
                            level        = { 'h2' }
                            fontFamily   = { language === 'en' ? 'var(--font-text-en)' : 'var(--font-text-ru)' }
                            fontWeight   = { 700 }
                            align        = {'left'}
                            titleText_en = {[ { title: title_en,      color: ['black', 'white'] }]}
                            titleText_ru = {[ { title: title_ru, color: ['black', 'white'] }]}
                        />

                        <UniversalTitle
                            customClass  = { styles.subtitle }
                            level        = { 'h3' }
                            fontFamily   = { language === 'en' ? 'var(--font-text-en)' : 'var(--font-text-ru)' }
                            fontWeight   = { 500 }
                            align        = {'left'}
                            titleText_en = {[ { title: subtitle_en} ]}
                            titleText_ru = {[ { title: subtitle_ru} ]}
                        />

                        <div 
                            className={`${styles.description_container}`}
                            style={{
                                borderTop:    widthWindow <= 576 & showBorder || widthWindow > 992 & showBorder ? `3px solid color-mix(in srgb, var(--accent-text-${currentColor}) 17%, transparent)`: 'none',
                                borderBottom: widthWindow <= 576 & showBorder || widthWindow > 992 & showBorder ? `3px solid color-mix(in srgb, var(--accent-text-${currentColor}) 17%, transparent)`: 'none',
                            }}
                        >
                            <div 
                                ref={descriptionWrapperRef}
                                className={`
                                    ${styles.description_wrapper}
                                    ${showBorder ? '' : styles.borderOff}
                                `}
                            >
                                <UniversalText 
                                    customClass  = { styles.description }
                                    fontFamily   = { 'var(--font-subtitle-en)' }
                                    color        = {['#8B949E', 'rgb(78, 78, 78)']}
                                    contentText  = {{
                                        en: description_en, 
                                        ru: description_ru
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.tech_stack_container}>
                        <UniversalTitle                             
                            customClass  = { styles.tech_stack_title }
                            level        = { 'h4' }
                            fontFamily   = { language === 'en' ? 'var(--font-text-en)' : 'var(--font-text-ru)' }
                            fontWeight   = { 700 }
                            align        = {'left'}
                            titleText_en = {[ { title: 'Tech Stack',      color: ['black', 'white'] }]}
                            titleText_ru = {[ { title: 'Стек технологий', color: ['black', 'white'] }]}
                        />

                        <div className={ styles.tech_stack_icons }>
                            {iconSkills.map((IconSkill, i) => <IconSkill key = { i } customClass = { styles.iconSkill } />)}
                        </div>
                        
                        <div className={styles.buttons_container}>
                            <div className={styles.iconDemo_btn_wrapper}>
                                <UniversalButton customClass={styles.iconDemo_btn}
                                    href={demo}
                                >
                                    <IconDemo customClass={styles.iconDemo_img}/>

                                    <UniversalText 
                                        customClass  = { styles.iconDemo_text }
                                        fontFamily   = { 'var(--font-button-secondary-en)' }
                                        fontWeight   = { 700 }
                                        color        = {['black']}
                                        contentText  = {{
                                            en: 'Demo', 
                                            ru: 'Demo'
                                        }}
                                    />

                                    <div className={styles.btn_effect}></div>
                                </UniversalButton>
                            </div>

                            <div className={styles.iconGithub_btn_wrapper}>
                                <UniversalButton customClass={styles.iconGithub_btn}
                                    href={gitHubLink}
                                >
                                    <IconGithub customClass={styles.iconGithub_img} />

                                    <UniversalText 
                                        customClass  = { styles.iconGithub_text }
                                        fontFamily   = { 'var(--font-button-secondary-en)' }
                                        fontWeight   = { 700 }
                                        color        = {['black']}
                                        contentText  = {{
                                            en: 'GitHub', 
                                            ru: 'GitHub'
                                        }}
                                    />

                                    <div className={styles.btn_effect}></div>
                                </UniversalButton>
                            </div>
                        </div>
                    </div>
                </ContentBox>
            </div>

            <MainFeatures mainFeatures = {mainFeatures} />
        </div>
    )
}

export default ProjectDetail
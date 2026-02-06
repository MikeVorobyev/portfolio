
import { useMemo } from 'react'
import { useWidthWindowStore, useLanguageStore, useThemeStore, useColorStore, useAccordionStore } from '../../../stores'
import styles from './projectCard.module.scss'
import UniversalTitle from '../../ui/UniversalTitle/UniversalTitle'
import UniversalText from '../../ui/UniversalText/UniversalText'
import UniversalButton from '../../ui/buttons/UniversalButton/UniversalButton'

import image_bg from '../../../images/projects_images/bg/image_bg.jpg'

const ProjectCard = ({ shadowOpacity = 0.1, project }) => {
    const { widthWindow } = useWidthWindowStore()
    const { currentColor } = useColorStore();
    const { theme } = useThemeStore()
    const { language } = useLanguageStore()

    const { keys, toggleOpenProcess } = useAccordionStore()
    const projectKey = `${project.id}_${project.slug}`
    const toggleOpen = keys[projectKey] ?? false
    const openContent = () => { toggleOpenProcess(projectKey) }

    
    // Генерирует новый случайный hue
    const hueValue = useMemo(() => Math.round(Math.random() * 360), [])

    if(widthWindow > 768) {
        return (
            <div 
                className={styles.projectCard}
                style={{
                    background: `${theme === 'dark' ? 'rgba(22, 27, 34, 1)' : 'white'}`,
                    '--shadow-color': theme === 'dark' ? '' : `var(--accent-text-${currentColor})`,
                    '--shadow-opacity': shadowOpacity,
                }}
            >

            <UniversalButton
                customClass = {styles.top_box}
                to          = {`/projects/${project.slug}`}
                saveScroll  = { true }
                settings    = {{
                    background: 'none',
                    boxShadow: 'none',
                }}
            >
                    <img 
                        className={styles.image_bg} 
                        src={image_bg} 
                        alt="image_bg"
                        loading="lazy"
                        style={{
                            filter: `
                                hue-rotate(${hueValue}deg) 
                                saturate(${theme   === 'dark' ? '0.6'  : '0.4'})
                                brightness(${theme === 'dark' ? '1.2'  : '1.5'})
                                contrast(${theme   === 'dark' ? '1.05' : '1.1'})
                            `
                        }}
                    />

                    <img 
                        className={styles.image_preview} 
                        src={project.screenshot} 
                        alt="image_preview" 
                        loading="lazy"
                        style={{
                            border: `solid 2px rgba(255, 255, 255, 0.07)`,
                            boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1)`,
                        }}
                    />
            </UniversalButton>

                <div className={styles.bottom_box}>
                    <UniversalTitle 
                        customClass  = { styles.title }
                        fontFamily   = { language === 'en' ? 'var(--font-text-en)' : 'var(--font-text-ru)' }
                        fontWeight   = { 400 }
                        titleText_en = {[ { title: project.title_en, color: ['#000', '#FFF'] }]} 
                        titleText_ru = {[ { title: project.title_ru, color: ['#000', '#FFF'] }]}
                    />

                    <UniversalTitle 
                        customClass  = { styles.subtitle }
                        fontFamily   = { 'var(--font-subtitle-en)' }
                        titleText_en = {[ { title: project.subtitle_en }]} 
                        titleText_ru = {[ { title: project.subtitle_ru }]}
                    />

                    <div className={styles.container_bottom}>
                        <UniversalText 
                            customClass  = { styles.text }
                            fontFamily   = { 'var(--font-subtitle-en)' }
                            color        = {['#8B949E', '#000']}
                            contentText  = {{
                                en: project.description_en, 
                                ru: project.description_ru
                            }}
                        />

                         <div className={styles.container_skills_and_btn}>
                            <div className={styles.skills}>
                                {project.iconSkills.map((Skill, i) => <Skill customClass={styles.icon_skill} size = {35} key = {i}/>)}
                            </div>

                            <UniversalButton
                                customClass = { styles.btn_link }
                                to          = {`/projects/${project.slug}`}
                                saveScroll  = { true }
                            >
                                <UniversalTitle 
                                    customClass  = { styles.btn_link__title }
                                    fontFamily   = { 'var(--font-subtitle-en)' }
                                    fontWeight   = { 300 }
                                    titleText_en = {[ { title: 'Learn more',    color: '#FFF' }]} 
                                    titleText_ru = {[ { title: 'Узнать больше', color: '#FFF' }]}
                                />
                            </UniversalButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div 
            className={styles.projectCard__mobile}
            style={{
                background: `${theme === 'dark' ? 'rgba(22, 27, 34, 1)' : 'white'}`,
                '--shadow-color': theme === 'dark' ? '' : `var(--accent-text-${currentColor})`,
                '--shadow-opacity': shadowOpacity,
            }}
        >
            <div 
                className={styles.header}
                onClick={openContent}
                style={{
                    background: `${theme === 'dark' ? 'rgba(22, 27, 34, 1)' : 'white'}`,
                }}
            >
                <UniversalTitle 
                    customClass  = { styles.header_title__mobile }
                    fontFamily   = { language === 'en' ? 'var(--font-text-en)' : 'var(--font-text-ru)' }
                    fontWeight   = { 400 }
                    titleText_en = {[ { title: widthWindow > 480 ? project.title_en : project.mobile_title_en, color: ['#000', '#FFF'] }]} 
                    titleText_ru = {[ { title: widthWindow > 480 ? project.title_ru : project.mobile_title_ru, color: ['#000', '#FFF'] }]}
                />

                <div 
                    className={styles.arrow_wrapper} 
                    style={{
                        background: `${theme === 'dark' ? 'rgba(255, 255, 255, 0.089)' : `var(--accent-text-${currentColor})`}`,
                    }}
                >
                    {!toggleOpen && <div className={styles.arrow_open}>∨</div>}
                    {toggleOpen && <div className={styles.arrow_close}>∧</div>}
                </div>
            </div> 

            <div className={`${styles.body} ${toggleOpen ? styles.body_open : ''}`}>
                <div className={`${styles.content} ${toggleOpen ? styles.content_open : ''}`}>
                    <UniversalButton
                        customClass = {styles.image_container__mobile}
                        to          = {`/projects/${project.slug}`}
                        saveScroll  = { true }
                        settings    = {{
                            background: 'none',
                            boxShadow: 'none',
                        }}
                    >
                        <img 
                            className={styles.image_bg__mobile} 
                            src={image_bg} 
                            alt="image_bg"
                            loading="lazy"
                            style={{
                                filter: `
                                    hue-rotate(${hueValue}deg) 
                                    saturate(${theme   === 'dark' ? '0.6'  : '0.4'})
                                    brightness(${theme === 'dark' ? '1.2'  : '1.5'})
                                    contrast(${theme   === 'dark' ? '1.05' : '1.1'})
                                `
                            }}
                        />

                        <img 
                            className={styles.image_preview__mobile} 
                            src={project.screenshot} 
                            alt="image_preview" 
                            loading="lazy"
                            style={{
                                border: `solid 2px rgba(255, 255, 255, 0.07)`,
                                boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1)`,
                            }}
                        />
                    </UniversalButton>
                    
                    <UniversalTitle 
                        customClass  = { styles.subtitle }
                        fontFamily   = { 'var(--font-subtitle-en)' }
                        titleText_en = {[ { title: project.subtitle_en }]} 
                        titleText_ru = {[ { title: project.subtitle_ru }]}
                    />

                    <div className={styles.container_bottom}>
                        <UniversalText 
                            customClass  = { styles.text }
                            fontFamily   = { 'var(--font-subtitle-en)' }
                            color        = {['#8B949E', '#000']}
                            contentText  = {{
                                en: project.description_en, 
                                ru: project.description_ru
                            }}
                        />


                        <div className={styles.container_skills_and_btn}>
                            <div className={styles.skills}>
                                {project.iconSkills.map((Skill, i) => <Skill customClass={styles.icon_skill} key = {i}/>)}
                            </div>

                            <UniversalButton
                                customClass = { styles.btn_link }
                                to          = {`/projects/${project.slug}`}
                                saveScroll  = { true }
                            >
                                <UniversalTitle 
                                    customClass  = { styles.btn_link__title }
                                    fontFamily   = { 'var(--font-subtitle-en)' }
                                    fontWeight   = { 300 }
                                    titleText_en = {[ { title: 'Learn more',    color: '#FFF' }]} 
                                    titleText_ru = {[ { title: 'Узнать больше', color: '#FFF' }]}
                                />
                            </UniversalButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
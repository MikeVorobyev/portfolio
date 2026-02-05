import styles from './projectsSection.module.scss'
import ProjectGallery from '../../../../components/ProjectGallery/ProjectGallery'
import UniversalTitle from '../../../../components/ui/UniversalTitle/UniversalTitle'
import UniversalButton from '../../../../components/ui/buttons/UniversalButton/UniversalButton'
import ContentBox from '../../../../components/ui/ContentBox/ContentBox'

import { useLanguageStore, useThemeStore, useWidthWindowStore } from '../../../../stores'


const ProjectsSection = () => {
    const { language } = useLanguageStore()
    const { theme } = useThemeStore()
    const { widthWindow } = useWidthWindowStore()

    return (
        <div className={styles.projectsSection}>
            <ContentBox 
                customClass = { styles.projectsSection_header }
                settings    = {{
                    background: `${theme === 'dark' ? 'var(--bg-color-dark)' : 'white'}`,
                    justifyContent: '',
                    flexDirection: '',
                    alignItems: '',
                    minHeight: '0px',
                }}
            >   
                    <div className={styles.header_title_wrapper}>
                        <UniversalTitle 
                            customClass  = { styles.header_title }
                            fontFamily   = { language === 'en' ? 'var(--font-brand-en)' : 'var(--font-brand-ru)' }
                            fontWeight   = { language === 'en' ? 700 : 400 }
                            titleText_en = { [{ title: 'Recent Projects',  color: ['#000', '#FFF']}] }
                            titleText_ru = { [{ title: 'Недавние проекты', color: ['#000', '#FFF']}] }
                        />
                    </div>

                    <UniversalButton 
                        customClass  = { styles.header_btn }
                        to           = { '/projects' }
                        settings     = {{
                            background: 'none',
                            boxShadow: 'none',
                        }}
                        saveScroll   = {true}
                    >
                        <UniversalTitle
                            customClass  = {styles.back_btn_txt}
                            fontFamily   = { language === 'en' ? 'var(--font-text-en)' : 'var(--font-text-ru)' }
                            fontWeight   = { 400 }
                            align        = {'center'}
                            titleText_en = {[ { title: 'See all →',        color: ['#000', '#FFF']}]}
                            titleText_ru = {[ { title: 'Посмотреть все →', color: ['#000', '#FFF']}]}
                        />
                    </UniversalButton>
            </ContentBox>

            <ProjectGallery limiter = {{showAll: false, maxItems: widthWindow > 768 && widthWindow <= 992 ? 2 : 3}}/>
        </div>
    )
}

export default ProjectsSection
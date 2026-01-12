import { useRef} from 'react';
import { useWidthWindowStore } from '../../stores'
import styles from './about.module.scss'
import PageTitle from '../../components/ui/PageTitle/PageTitle'
import AboutBioCard from './page-components/AboutBioCard/AboutBioCard'
import SkillsCarousel from '../../components/ui/SkillsCarousel/SkillsCarousel'
import AboutSocial from './page-components/AboutSocial/AboutSocial'

const About = () => {
    const { widthWindow } = useWidthWindowStore()
    const skillsRef = useRef([
        { id: 'JavaScript',     title: 'JavaScript',       color: false},
        { id: 'CSS',            title: 'CSS',              color: true },
        { id: 'SCSS',           title: 'SCSS',             color: false },
        { id: 'HTML',           title: 'HTML',             color: true },
        { id: 'NodeJS',         title: 'NodeJS',           color: false },
        { id: 'TypeScript',     title: 'TypeScript',       color: false },
        { id: 'React',          title: 'React',            color: false },
        { id: 'Redux',          title: 'Redux',            color: false },
        { id: 'Zustand',        title: 'Zustand',          color: false },
        { id: 'Photoshop',      title: 'Photoshop',        color: false },
        { id: 'AfterEffects',   title: 'After Effects',    color: false },
        { id: 'PremierePro',    title: 'Premiere Pro',     color: false },
        { id: 'Audition',       title: 'Adobe Audition',   color: false },
        { id: 'DavinciResolve', title: 'DaVinci Resolve',  color: false },
        { id: 'Blender',        title: 'Blender',          color: false },
        { id: 'VScode',         title: 'VS Code',          color: false },
        { id: 'Pixo',           title: 'Pixo',             color: false },
        { id: 'Figma',          title: 'Figma',            color: false },
        { id: 'cinema4d',       title: 'Cinema 4D',        color: false },
        { id: 'Cubase',         title: 'Cubase',           color: false },
        { id: 'Samplitude',     title: 'MAGIX Samplitude', color: false }
    ])

    return (
        <div className={`${styles.about}`}>
            <PageTitle pageTitle_en = {'ABOUT'} pageTitle_ru = {'ОБО МНЕ'}/>

            <AboutBioCard />

            <div className={styles.component_container}>
                <SkillsCarousel skillsRef = {skillsRef} customClass = {styles.skillsCarousel_settings} />
                {widthWindow > 992 && <AboutSocial /> }
            </div>

            { widthWindow < 992 && <AboutSocial /> }
        </div>
    )
}

export default About
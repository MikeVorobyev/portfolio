import PageTitle from '../../components/ui/PageTitle/PageTitle'
import styles from './projects.module.scss'
import { useThemeStore } from '../../stores'


const Projects = () => {
    const { theme } = useThemeStore()
    return (
        <div className={`${styles.projects}`}>
            <PageTitle pageTitle_en = {'PROJECTS'} pageTitle_ru = {'ПРОЕКТЫ'}/>
        </div>
    )
}

export default Projects
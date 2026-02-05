import PageTitle from '../../components/ui/PageTitle/PageTitle'
import ProjectGallery from '../../components/ProjectGallery/ProjectGallery'
import styles from './projects.module.scss'

const Projects = () => {
    return (
        <div className={`${styles.projects}`}>
            <PageTitle pageTitle_en = {'PROJECTS'} pageTitle_ru = {'ПРОЕКТЫ'}/>
            <ProjectGallery />
        </div>
    )
}

export default Projects
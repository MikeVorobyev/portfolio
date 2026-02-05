import styles from './projectGallery.module.scss'
import ProjectCard from './ProjectCard/ProjectCard'
import ContentBox from '../ui/ContentBox/ContentBox'
import projects from './projectsData'

const ProjectGallery = ({ limiter = {showAll: true, maxItems: 3 }}) => {
    const { showAll, maxItems } = limiter

    return (
        <div>
            <ContentBox
                customClass={styles.projectGallery}
                settings = {{
                    background     : 'none',
                    boxShadow      : 'none',
                    justifyContent : '',
                    flexDirection  : '',
                    minHeight      : '0px',
                }}
            >
                {showAll
                    ? projects.map((project) => <ProjectCard key={project.id} project={project}/>)
                    : projects.slice(0, maxItems).map((project) => <ProjectCard key={project.id} project={project}/>)
                }
            </ContentBox>
        </div>
    )
}

export default ProjectGallery

import PromoBlock from './page-components/PromoBlock/PromoBlock'
import AboutSection from './page-components/AboutSection/AboutSection'
import ProjectsSection from './page-components/ProjectsSection/ProjectsSection'

import ContactSection from './page-components/ContactSection/ContactSection'

import styles from './home.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <PromoBlock />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </div>
    )
}

export default Home


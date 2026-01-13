import PageTitle from '../../components/ui/PageTitle/PageTitle'
import ContactForm from './ContactForm/ContactForm'
// import { useThemeStore } from "../../stores"

import styles from './contact.module.scss'

const Contact = () => {
    // const { theme } = useThemeStore()
    return ( 
        <div className={`${styles.contact}`}>
            <PageTitle pageTitle_en = {'CONTACT'} pageTitle_ru = {'КОНТАКТЫ'}/>
            <ContactForm />
        </div>
    )
}

export default Contact
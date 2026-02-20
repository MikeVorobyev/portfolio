import PageTitle from '../../components/ui/PageTitle/PageTitle'
import ContactForm from './ContactForm/ContactForm'

import styles from './contact.module.scss'

const Contact = () => {
    return ( 
        <div className={`${styles.contact}`}>
            <PageTitle pageTitle_en = {'CONTACT'} pageTitle_ru = {'КОНТАКТЫ'}/>
            <ContactForm />
        </div>
    )
}

export default Contact
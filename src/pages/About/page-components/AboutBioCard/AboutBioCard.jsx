import { useThemeStore, useColorStore } from '../../../../stores'

import styles from './aboutBioCard.module.scss'
import Mikle_photo from '../../../../images/about_photo/Mikle.jpg'

import ContentBox from '../../../../components/ui/ContentBox/ContentBox'
import UniversalText from '../../../../components/ui/UniversalText/UniversalText'
import UniversalButton from '../../../../components/ui/buttons/UniversalButton/UniversalButton'
import IconDocument from '../../../../components/icons/IconDocument/IconDocument'

import aboutText  from '../../../../content/aboutText.json'


const AboutBioCard = () => {
    const { theme }        = useThemeStore()
    const { currentColor } = useColorStore()
    return (
        <div className={styles.aboutBioCard_wrapper}>
            <div 
                className={styles.aboutBioCard}
                style={{
                    'background': `${theme === 'dark' ? 'var(--bg-color-dark)' : 'white'}`,
                }}
            >
                <ContentBox 
                    customClass={styles.left_box}
                    settings={{
                        'background': 'none',
                        'boxShadow': 'none',
                    }}
                >
                    <img className={styles.photo} src={Mikle_photo} alt="Mikle Photo" />
                </ContentBox>

                <ContentBox
                    customClass={styles.right_box}
                    settings={{
                        'background': 'none',
                        'boxShadow': 'none',
                        'flexDirection': 'column',
                        'justifyContent': 'space-between'
                    }}
                >
                    <div className={
                           `${styles.biography_wrapper} 
                            ${theme === 'dark' ? '' : styles.white_theme}`
                        }
                    >
                        <UniversalText
                            customClass  = {styles.biography}
                            contentText  = { aboutText }
                            enableAccent = {true} 
                            fontFamily   = { 'var(--font-subtitle-en)' }
                            color        = {['#fff', '#000']}
                        />
                    </div>

                    <div 
                        className={
                           `${styles.btn_wrapper}
                            ${theme === 'dark' ? '' : styles.btn_wrapper__white_theme}`
                        }
                        style={{'--bg-random-color': `var(--accent-text-${currentColor})`,}}
                    >
                        <UniversalButton
                            href="/documents/Resume_Mike_Vorobyev.docx"
                            download="Resume_Mike_Vorobyev.docx"
                            customClass = {styles.btn}
                            settings    = {{'border': `1.5px solid var(--accent-text-${currentColor})`}}
                        >
                            <IconDocument size={29} color={`var(--accent-text-${currentColor})`}/>
                            <UniversalText
                                customClass  = {styles.btn_text}
                                enableAccent = {true} 
                                fontFamily   = { 'var(--font-subtitle-en)' }
                                fontWeight   = { 700 }
                                contentText  = {{ en: '*Download Resume*', ru: '*Скачать резюме*' }}
                            />
                        </UniversalButton>
                    </div>
                </ContentBox>
            </div>
        </div>
    )
}

export default AboutBioCard
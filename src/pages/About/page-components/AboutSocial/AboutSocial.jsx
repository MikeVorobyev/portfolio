import styles from './aboutSocial.module.scss'
import { useThemeStore, useColorStore } from '../../../../stores'
import UniversalButton from '../../../../components/ui/buttons/UniversalButton/UniversalButton'
import IconVK from '../../../../components/icons/IconVK/IconVK'
import IconGithub from '../../../../components/icons/IconGithub/IconGithub'
import IconCodewars from '../../../../components/icons/IconCodewars/IconCodewars'
import IconTelegramInCircle from '../../../../components/icons/IconTelegramInCircle/IconTelegramInCircle'

const AboutSocial = ({ customClass  = '' }) => {
    const { theme } = useThemeStore()
    const { currentColor } = useColorStore()

    return (
        <div 
            className={`${styles.aboutSocial} ${customClass}`}
            style={{background: `${theme === 'dark' ? 'rgba(22, 27, 34, 1)' : 'white'}`}}
        >
            <div className={`${styles.social}`}>
                <UniversalButton
                    customClass = {styles.social_vk}
                    href = { "https://vk.com/id730297370" }
                    settings={{
                        'boxShadow': 'none',
                        'filter': 'drop-shadow(var(--text-shadow-light))',
                        'background': 'none'
                    }}
                >
                    <IconVK customClass = {styles.social_vk} color={`var(--accent-text-${currentColor})`} />
                </UniversalButton>

                <UniversalButton 
                    customClass  = { styles.bottom_box_btn }
                    href         = { "https://t.me/idVma"}
                    settings = {{
                        'boxShadow': 'none',
                        'filter': 'drop-shadow(var(--text-shadow-light))',
                        'background': 'none'
                    }} 

                >
                    <IconTelegramInCircle customClass = {styles.telegram} color={`var(--accent-text-${currentColor})`} />
                </UniversalButton>

                <UniversalButton
                    customClass = {styles.social_codewars}
                    href     = { "https://www.codewars.com/users/MikhailVi1"} 
                    settings = {{
                        'boxShadow': 'none',
                        'filter': 'drop-shadow(var(--text-shadow-light))',
                        'background': 'none'
                    }}
                >
                    <IconCodewars customClass = {styles.social_codewars} className={styles.codewars} color={`var(--accent-text-${currentColor})`} />
                </UniversalButton>

                <UniversalButton
                    customClass = {styles.social_github}
                    href     = { "https://github.com/MikeVorobyev"} 
                    settings = {{
                        'boxShadow': 'none',
                        'filter': 'drop-shadow(var(--text-shadow-light))',
                        'background': 'none'
                    }}
                >
                    <IconGithub customClass = {styles.social_github} className={styles.github} color={`var(--accent-text-${currentColor})`} />
                </UniversalButton>
            </div>
        </div>
    )
}

export default AboutSocial
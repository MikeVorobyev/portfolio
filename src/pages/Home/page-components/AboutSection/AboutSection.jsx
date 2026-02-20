import { useLanguageStore } from '../../../../stores'

import UniversalTitle from "../../../../components/ui/UniversalTitle/UniversalTitle"
import UniversalText from '../../../../components/ui/UniversalText/UniversalText'
import ContentBox from '../../../../components/ui/ContentBox/ContentBox'
import UniversalButton from '../../../../components/ui/buttons/UniversalButton/UniversalButton'

import styles from './aboutSection.module.scss'

const AboutSection = () => {
  const { language } = useLanguageStore()

const shortBio = {
  en: `Graduated from the Lvov Cultural College. Worked as a guitar teacher, sound engineer, and video editor. Composed music for AudioJingle, created video projects for companies and government agencies, including work for the Karelian culture festival "Oma Randa" (3D video, anthem arrangement).

Started web development with HTML, CSS, and JavaScript on Code Basics. Continued with React, TypeScript, Zustand, Redux Toolkit through self-study. Solved problems on Codewars.

Currently working with React, JavaScript, TypeScript, Zustand, Redux Toolkit, SCSS.`,

  ru: `Окончил Училище Культуры им. Львова. Работал преподавателем гитары, звукорежиссером и видеомонтажером. Писал музыку для AudioJingle, делал видеоролики для компаний и государственных служб, участвовал в создании контента для фестиваля "Ома Ранда" (3D-видео, аранжировка гимна).

Начал изучать веб-разработку с HTML, CSS и JavaScript на Code Basics. Дальше самостоятельно осваивал React, TypeScript, Zustand, Redux Toolkit. Решал задачи на Codewars.

Сейчас работаю с React, JavaScript, TypeScript, Zustand, Redux Toolkit, SCSS.`
};

  return (
    <div className={ styles.aboutSection_wrapper }>
      <ContentBox 
        customClass  = { styles.aboutSection }
        settings = {{
            'flexDirection': 'column',
            'alignItems'   : 'center',
            'gap': '',
        }}>

          <UniversalTitle
            customClass  = { styles.aboutTitle }
            fontFamily   = { language === 'en' ? 'var(--font-brand-en)' : 'var(--font-brand-ru)' }
            fontWeight   = { language === 'en' ? 700 : 400 }
            titleText_en = { [{title: 'About',   color: 'rgba(22, 27, 34, 1)'}] }
            titleText_ru = { [{title: 'Обо мне', color: 'rgba(22, 27, 34, 1)'}] }
          />

          <UniversalText
            customClass  = { styles.aboutText }
            fontFamily   = {'var(--font-subtitle-en)'} 
            fontWeight   = { 400 }
            color        = { ['rgba(34, 23, 22, 1)'] }
            contentText  = { shortBio }
            enableAccent = { true }
          />

          <div className = { styles.aboutButton_wrapper }>
            <UniversalButton
              customClass = { styles.aboutButton }
              to          = { '/about' }
              saveScroll  = { true }
            >
              <UniversalText
                customClass  = { styles.aboutTextButton }
                fontFamily   = { language === 'en' ? 'var(--font-text-en)' : 'var(--font-text-ru)' } 
                fontWeight   = { 700 }
                enableAccent = { true }
                contentText  = { { 'en': 'More...', 'ru': 'Подробнее...'} }
              />
            </UniversalButton>
          </div>
      </ContentBox>
    </div>
  )
}

export default AboutSection




// import { useLanguageStore } from '../../../../stores'

// import UniversalTitle from "../../../../components/ui/UniversalTitle/UniversalTitle"
// import UniversalText from '../../../../components/ui/UniversalText/UniversalText'
// import ContentBox from '../../../../components/ui/ContentBox/ContentBox'
// import UniversalButton from '../../../../components/ui/buttons/UniversalButton/UniversalButton'

// import aboutText  from '../../../../content/aboutText.json'

// import styles from './aboutSection.module.scss'


// const AboutSection = () => {
//   const { language } = useLanguageStore()

//   return (
//     <div className={ styles.aboutSection_wrapper }>
//       <ContentBox 
//         customClass  = { styles.aboutSection }
//         settings = {{
//             'flexDirection': 'column',
//             'alignItems'   : 'center',
//             'gap': '',
//         }}>

//           <UniversalTitle
//             customClass  = { styles.aboutTitle }
//             fontFamily   = { language === 'en' ? 'var(--font-brand-en)' : 'var(--font-brand-ru)' }
//             fontWeight   = { language === 'en' ? 700 : 400 }
//             titleText_en = { [{title: 'About',   color: 'rgba(22, 27, 34, 1)'}] }
//             titleText_ru = { [{title: 'Обо мне', color: 'rgba(22, 27, 34, 1)'}] }
//           />

//           <UniversalText
//             customClass  = { styles.aboutText }
//             fontFamily   = {'var(--font-subtitle-en)'} 
//             fontWeight   = { 400 }
//             color        = { ['rgba(34, 23, 22, 1)'] }
//             contentText  = { aboutText }
//             variant      = { 'short' }
//           />

//           <div className = { styles.aboutButton_wrapper }>

//             <UniversalButton
//               customClass = { styles.aboutButton }
//               to          = { '/about' }
//               saveScroll  = { true }
//             >

//               <UniversalText
//                 customClass  = { styles.aboutTextButton }
//                 fontFamily   = { language === 'en' ? 'var(--font-text-en)' : 'var(--font-text-ru)' } 
//                 fontWeight   = { 700 }
//                 enableAccent = { true }
//                 contentText  = { { 'en': 'More...', 'ru': 'Подробнее...'} }
//               />

//             </UniversalButton>
            
//           </div>
//       </ContentBox>
//     </div>
//   )
// }

// export default AboutSection
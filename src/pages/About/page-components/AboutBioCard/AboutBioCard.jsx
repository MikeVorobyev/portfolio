import { useThemeStore, useColorStore } from '../../../../stores'

import styles from './aboutBioCard.module.scss'
import Mikle_photo from '../../../../images/about_photo/Mikle.jpg'

import ContentBox from '../../../../components/ui/ContentBox/ContentBox'
import UniversalText from '../../../../components/ui/UniversalText/UniversalText'
import UniversalButton from '../../../../components/ui/buttons/UniversalButton/UniversalButton'
import IconDocument from '../../../../components/icons/IconDocument/IconDocument'

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
                    <img className={styles.photo} src={Mikle_photo} alt="Mikle" />
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
                        {/* Заголовок */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "*Before Web Development:*", 
                                ru: "*До веб-разработки:*" 
                            }}
                        />

                        <br />

                        {/* Абзац 1 - Образование и первые шаги */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "*Graduated from the Lvov Cultural College*. Worked as a guitar teacher at a *Children's Art School*. Later moved to the *House of Culture* as a sound engineer — handled sound for events and started editing videos on the side.", 
                                ru: "*Окончил Училище Культуры им. Львова*. После учебы работал преподавателем по классу гитары в *Детской Школе Искусств*. Затем перешел в *Дом Культуры* на должность звукорежиссера — занимался звуком на мероприятиях, параллельно начал монтировать видео." 
                            }}
                        />

                        <br />

                        {/* Абзац 2 - Музыка для стоков */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "During this period, I also began composing music for stock audio platforms (*AudioJingle*), working as a composer. My music was used on *YouTube, television, and other media outlets*. Competition turned out to be too high, so music composition remained a hobby.", 
                                ru: "В этот же период начал писать музыку для аудиостоков (*AudioJingle*) — работал как композитор, музыка уходила на *YouTube, телевидение, в СМИ*. Конкуренция оказалась слишком высокой, направление осталось хобби." 
                            }}
                        />

                        <br />

                        {/* Абзац 3 - Газета и возвращение */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "After the House of Culture, worked as a *layout designer at a local newspaper* — handled full layout for every issue. Later returned to the *House of Culture* as a video editor. Simultaneously took freelance projects from the local *Administration*: video projects, intros, promos. Registered as self-employed in two fields — *video editing* and *composing*.", 
                                ru: "После Дома Культуры устроился *верстальщиком в местную газету* — делал полную верстку каждого выпуска. Через время вернулся в *Дом Культуры*, но уже как видеомонтажер. Параллельно брал заказы от местной *Администрации*: видеопроекты, заставки, ролики. Оформил самозанятость по двум направлениям — *видеомонтаж* и *композитор*." 
                            }}
                        />

                        <br />

                        {/* Заголовок проектов */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "*Notable projects:*", 
                                ru: "*Из крупных проектов:*" 
                            }}
                        />

                        <br />

                        {/* Проект 1 */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "• Full video production for the Karelian culture festival *'Oma Randa'* — editing videos with *3D integration in Cinema 4D*, arranging the anthem", 
                                ru: "• Полное видеосопровождение праздника карельской культуры *'Ома Ранда'* — монтаж роликов с *интеграцией 3D-объектов в Cinema 4D*, аранжировка гимна" 
                            }}
                        />

                        <br />

                        {/* Проект 2 */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "• Created an animated *3D intro* for the children's show *'Vse obo vsem'*", 
                                ru: "• Создание *мультипликационной 3D-заставки* для детской программы *'Все обо всем'*" 
                            }}
                        />

                        <br />

                        {/* Заголовок IT */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "*Path into IT:*", 
                                ru: "*Путь в IT:*" 
                            }}
                        />

                        <br />

                        {/* Начало обучения */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "Started with *HTML and CSS* on *Code Basics*. Took a one-year break due to workload at my main job. Returned to *JavaScript* on the same platform, then continued self-study: *YouTube, online courses, coding along with instructors*.", 
                                ru: "Начал с сайта *Code Basics*, где прошел курсы по *HTML и CSS*. Потом оставил обучение на год из-за загруженности на основной работе. Через год вернулся к *JavaScript* на том же Code Basics, дальше ушел в самостоятельное обучение: *YouTube, курсы, верстка с преподавателями*." 
                            }}
                        />

                        <br />

                        {/* RS School */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "Tried *Rolling Scopes School* — my skills weren't sufficient at the time, so I focused on practice. Gradually worked my way up to *React, TypeScript, Zustand, Redux Toolkit*. Simultaneously solved problems on *Codewars*.", 
                                ru: "Пробовал учиться в *Rolling Scopes School* — на тот момент навыков не хватало, поэтому сосредоточился на практике. Постепенно дошел до *React, TypeScript, Zustand, Redux Toolkit*. Параллельно решал задачи на *Codewars*." 
                            }}
                        />

                        <br />

                        {/* Текущие достижения */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "*Currently:* 530 solved problems, rank *3 kyu* (top 0.8%). I work with *React, JavaScript, TypeScript, Zustand, Redux Toolkit, SCSS*. I handle layout and JavaScript independently. Interested in *vibe coding* and working with neural networks.", 
                                ru: "*Сейчас:* 530 решенных задач, ранг *3 kyu* (топ 0.8%). В работе использую *React, JavaScript, TypeScript, Zustand, Redux Toolkit, SCSS*. Верстку и JS пишу самостоятельно. Интересуюсь *вайбкодингом* и работой с нейросетями." 
                            }}
                        />

                        <br />

                        {/* Стек */}
                        <UniversalText enableAccent={true} customClass={styles.biography} color={['#fff', '#000']} fontFamily={'var(--font-subtitle-en)'}
                            contentText={{ 
                                en: "*Tech Stack:* React • JavaScript • TypeScript • Zustand • Redux Toolkit • SCSS • HTML • CSS • Git", 
                                ru: "*Стек:* React • JavaScript • TypeScript • Zustand • Redux Toolkit • SCSS • HTML • CSS • Git" 
                            }}
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
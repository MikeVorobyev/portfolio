import React, { useState, useEffect, useRef, useCallback} from 'react';
import { useThemeStore, useWidthWindowStore } from '../../../stores'
import IconFactory from "../../icons/skills/IconFactory";
import styles from './skillsCarousel.module.scss';

// mask = true или false  - Этот параметр включает или отключает размывающую маску по краям контейнера
// animation = true или false  -  Этот параметр включает или выключает анимацию движения иконок в карусели
// skillsRef = useRef([
//     { id: 'JavaScript', title: 'JavaScript', color: false},
//     { id: 'CSS',        title: 'CSS',        color: true },
//     { id: 'SCSS',       title: 'SCSS',       color: false },
// ])  -  Этот параметр передает массив с объектами, в которых хранятся данные для отрисовки только нужных в данный момент иконок из ншей фабрики с иконками <IconFactory />

const SkillsCarousel = React.memo(({ customClass  = '', mask = true, skillsRef = [], animation = true }) => {

    const { theme } = useThemeStore()
    const { widthWindow } = useWidthWindowStore()
    const [scrollPosition, setScrollPosition] = useState(0)
    const trackWrapperRef = useRef(null)     
    const trackRef = useRef(null)
    const animationRef = useRef(null)                      // ID анимации
    const speed = widthWindow <= 480 ? 0.5 : 1             // Пикселей за кадр
    const iconGap = widthWindow <= 480 ? 15 : 30           // Расстояние между иконками
    const iconSize = 
        widthWindow <= 480 ? 30 :
        widthWindow <= 768 ? 50 : 70
    const allIcon = [...skillsRef.current, ...skillsRef.current, ...skillsRef.current]

    const animate = useCallback(() => {
        const onePartTrackLength = (skillsRef.current.length * (iconSize + iconGap))
        const wrapperWidth = trackWrapperRef.current?.offsetWidth || 0
        const trackLength = (allIcon.length * (iconSize + iconGap)) - (iconGap + wrapperWidth)

        setScrollPosition((prev) => {
            if(prev <= -trackLength) return -(trackLength - onePartTrackLength)
            return prev - speed
        })
        if (animation) {
            animationRef.current = requestAnimationFrame(animate)
        }
    }, [speed, iconGap, iconSize, animation, skillsRef, allIcon.length])

    useEffect(() => {
        if(animation) {
            animationRef.current = requestAnimationFrame(animate)
            return () => { cancelAnimationFrame(animationRef.current) }
        }
    }, [animate, animation])

    return (
        <div  
            className={`${styles.slider_container} ${customClass}`}
            style={{background: `${theme === 'dark' ? 'rgba(22, 27, 34, 1)' : 'white'}`}}
        >
            <div ref={trackWrapperRef} className={`${styles.slider_track_wrapper} ${mask ? styles.maskOn : ''}`}>
                <div 
                    ref={trackRef} 
                    className={styles.slider_track}
                    style={{ 
                        transform: `translateX(${scrollPosition}px)`,
                        gap: `${iconGap}px`
                    }}
                >
                        {allIcon.map((skill, i) => (
                            <IconFactory key={`${skill.id}-${i}`} name_ID={skill.id} name_titlePopup={skill.title} size={iconSize} color={skill.color ? theme === 'dark' ? 'white': 'rgba(22, 27, 34, 1)' : ''}/>
                        ))}
                </div>
            </div>
        </div>
    )
})

export default SkillsCarousel
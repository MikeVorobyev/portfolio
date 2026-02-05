import { useState, useMemo } from 'react'
import styles from './videoPreview.module.scss'
import UniversalTitle from '../../../../ui/UniversalTitle/UniversalTitle'
import imageBg from '../../../../../images/projects_images/bg/image_bg.jpg'
import { useThemeStore } from '../../../../../stores'

const VideoPreview = ({ videoYouTube, videoRuTube }) => {
    const { theme } = useThemeStore()
    const [activePlayer, setActivePlayer] = useState('youtube')

    // Генерирует новый случайный hue при каждом изменении currentColor
    const hueValueYouTube = useMemo(() => Math.round(Math.random() * 360), [])
    const hueValueRuTube = useMemo(() => Math.round(Math.random() * 360), [])

    return (
        <div  className={styles.videoPreview}>       
            <div className={styles.buttons}>
                <button 
                    className={`
                        ${styles.button_youTube}
                        ${theme === 'dark' ? styles.dark_theme : styles.white_theme}
                        ${activePlayer === 'youtube' ? styles.onFirstplan_youTube_btn : styles.onBackplan_youTube_btn}
                    `}
                    onClick={() => setActivePlayer('youtube')}
                >
                    <UniversalTitle
                        fontFamily   = { 'var( --font-button-secondary-en)' }
                        fontWeight   = { 600 }     
                        titleText_en = {[ { title: 'YouTube' }]} 
                        titleText_ru = {[ { title: 'YouTube' }]} 
                    />
                </button>
                
                <button 
                    className={`
                        ${styles.button_ruTube}
                        ${theme === 'dark' ? styles.dark_theme : styles.white_theme} 
                        ${activePlayer === 'rutube' ? styles.onFirstplan_ruTube_btn : styles.onBackplan_ruTube_btn}
                    `}
                    onClick={() => setActivePlayer('rutube')}
                >
                    <UniversalTitle
                        fontFamily   = { 'var( --font-button-secondary-en)' }
                        fontWeight   = { 600 }         
                        titleText_en = {[ { title: 'RuTube' }]} 
                        titleText_ru = {[ { title: 'RuTube' }]} 
                    />
                </button>
            </div>
            

            <div className={styles.player_container}>
                <div 
                    className={`
                        ${styles.youTube_wrapper}  
                        ${activePlayer === 'youtube' ? styles.onFirstplan : styles.onBackplan}
                    `}
                    style={{background: theme === 'dark' ? 'rgba(22, 27, 34, 1)' : 'white'}}
                >
                    <div className={styles.youTube_player_container}>
                        <img 
                            src={imageBg} 
                            className={styles.youTube_bg} 
                            alt='YouTube_bg'
                            style={{
                                filter: `
                                    hue-rotate(${hueValueYouTube}deg) 
                                    saturate(${theme   === 'dark' ? '0.6'  : '0.4'})
                                    brightness(${theme === 'dark' ? '1.2'  : '1.5'})
                                    contrast(${theme   === 'dark' ? '1.05' : '1.1'})
                                `
                            }}
                        />
                        <iframe 
                            className={styles.youTube_player}
                            src={videoYouTube}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>

                
                <div 
                    className={`
                        ${styles.ruTube_wrapper} 
                        ${activePlayer === 'rutube' ? styles.onFirstplan : styles.onBackplan}
                    `}
                    style={{background: theme === 'dark' ? 'rgba(22, 27, 34, 1)' : 'white'}}
                >
                    <div className={styles.ruTube_player_container}>
                        <img 
                            src={imageBg} 
                            className={styles.ruTube_bg} 
                            alt='RuTube_bg'
                            style={{
                                filter: `
                                    hue-rotate(${hueValueRuTube}deg) 
                                    saturate(${theme   === 'dark' ? '0.6'  : '0.4'})
                                    brightness(${theme === 'dark' ? '1.2'  : '1.5'})
                                    contrast(${theme   === 'dark' ? '1.05' : '1.1'})
                                `
                            }}
                        />
                        <iframe
                            className={styles.ruTube_player}
                            src={videoRuTube}
                            title="RuTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            webkitAllowFullScreen 
                            mozallowfullscreen 
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPreview
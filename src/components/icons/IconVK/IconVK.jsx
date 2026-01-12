import styles from './iconVK.module.scss'

const IconVK = ({ size, color, customClass = '' }) => {
    return (
        <svg className={customClass} width={size} height={size} viewBox="0 0 24 24" fill="none">
            <defs>
                <mask id="vkMask">
                    <rect width="24" height="24" fill="white"/>
                    <path
                        fill="black"
                        d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 
                        3.8-3.95h2.58a7.62 7.62 0 0 1-3.51 4.98 7.9 7.9 0 0 1 4.11 5.01h-2.84a4.94 4.94 0 0 0-4.14-3.57v3.57h-.31Z"
                    />
                </mask>
            </defs>
            
            <rect 
                className={`${styles.iconVK}` }
                width="24" 
                height="24" 
                rx="5" 
                fill={color} 
                mask="url(#vkMask)"
            />
        </svg>
    )
}

export default IconVK
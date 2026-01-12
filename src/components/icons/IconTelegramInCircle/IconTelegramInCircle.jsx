import styles from './iconTelegramInCircle.module.scss'

const IconTelegramInCircle = ({ size, color = '#37BBFE', customClass = '' }) => {
    return (
        <svg className={customClass} width={size} height={size} viewBox="0 0 32 32" fill="none">
            <defs>
                <mask id="telegramMask">
                    <rect width="32" height="32" fill="white"/>
                    <g transform="scale(1.1) translate(-1.5, -1.5)">
                        <path
                            fill="black"
                            d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z"
                        />
                    </g>
                </mask>
            </defs>
            
            <circle 
                className={`${styles.iconTelegramInCircle}`}
                cx="16" 
                cy="16" 
                r="16" 
                fill={color} 
                mask="url(#telegramMask)"
            />
        </svg>
    )
}
export default IconTelegramInCircle
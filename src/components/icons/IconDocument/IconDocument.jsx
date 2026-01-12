import styles from './iconDocument.module.scss'

const IconDocument = ({ size, color, customClass }) => {
    return (
        <svg className={`${styles.iconDocument} ${customClass}`} width={size} height={size} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={`${styles.iconDocument} ${customClass}`} id="document"  width={size} height={size} x="0" y="0" fill={color} fillOpacity="0" />

            <path className={`${styles.iconDocument} ${customClass}`} id="Vector" fill={color}
                d="M16.634 2.77173L7.85669 2.77173C6.58098 2.77173 5.54688 3.80583 5.54688 5.08154L5.54688 24.484C5.54688 25.7597 6.58098 
                26.7938 7.85669 26.7938L21.7156 26.7938C22.9913 26.7938 24.0254 25.7597 24.0254 24.484L24.0254 10.1631L16.634 2.77173ZM15.7101 
                11.0871L15.7101 4.61958L22.1775 11.0871L15.7101 11.0871Z" 
            />
        </svg>
    )
}

export default IconDocument
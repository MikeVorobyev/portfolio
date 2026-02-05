const IconCSS = ({ size, color, customClass = '' }) => {
    return (
        <svg className={customClass} viewBox="0 0 60 60" width={size || 60} height={size || 60} fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>CSS</title>
            <rect width="60" height="60" x="0" y="0" rx="10" fill={color || "rgb(21,114,182)"} />
            <g>
                <path d="M0 55L18.7134 49.7651L23.116 0L0 0L0 55Z" fill="rgb(48,151,196)" fillRule="nonzero" transform="matrix(-1,0,0,1,30.116,3)" />
                <path d="M29.884 58L48.5974 52.7651L53 3L29.884 3L29.884 58L29.884 58Z" fill="rgb(51,169,220)" fillRule="nonzero" />
                <path d="M29.884 24.3065L39.2525 24.3065L39.9002 16.9916L29.884 16.9916L29.884 9.84798L47.6376 9.84798L47.4678 11.7644L45.728 31.4496L29.884 31.4496L29.884 24.3065Z" fill="rgb(255,255,255)" fillRule="nonzero" />
                <path d="M29.9266 42.859L29.8954 42.868L22.0106 40.7194L21.5059 35.022L14.3998 35.022L15.3921 46.2384L29.8941 50.3003L29.9272 50.2906L29.9272 42.859L29.9266 42.859Z" fill="rgb(235,235,235)" fillRule="nonzero" />
                <path d="M38.651 31.1475L37.798 40.7142L29.9017 42.8648L29.9017 50.2971L44.4159 46.2384L44.5227 45.0313L45.7546 31.1475L38.651 31.1475L38.651 31.1475Z" fill="rgb(255,255,255)" fillRule="nonzero" />
                <path d="M29.9088 9.84798L29.9088 16.991L12.8075 16.991L12.6651 15.3856L12.3428 11.7644L12.1731 9.84799L29.9088 9.84799L29.9088 9.84798ZM29.884 24.3072L29.884 31.4508L22.099 31.4508L21.9573 29.8455L21.6343 26.2236L21.4646 24.3072L29.884 24.3072Z" fill="rgb(235,235,235)" fillRule="nonzero" />
            </g>
        </svg>
    )
}

export default IconCSS
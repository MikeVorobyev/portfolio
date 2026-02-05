const IconHTML = ({ size, color, customClass = '' }) => {
    return (
        <svg className={customClass} viewBox="0 0 60 60" width={size || 60} height={size || 60} fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>HTML</title>
            <rect width="60" height="60" x="0" y="0" rx="10" fill={color || "rgb(228,77,38)"} />
            <g>
                <path d="M29.8071 57L48.5803 51.8602L52.9975 3L29.8071 3L29.8071 57Z" fill="rgb(241,101,41)" fillRule="nonzero" />
                <path d="M0 54L18.7731 48.8602L23.1904 0L0 0L0 54Z" fill="rgb(220,92,37)" fillRule="nonzero" transform="matrix(-1,0,0,1,30.1904,3)" />
                <path d="M29.8071 24.2098L20.4084 24.2098L19.76 17.0268L29.8071 17.0268L29.8071 10.0131L11.9976 10.0131L12.167 11.8952L13.9131 31.2228L29.8071 31.2228L29.8071 24.2098ZM29.8071 42.4242L29.7757 42.4325L21.8662 40.3228L21.3604 34.7297L14.2303 34.7297L15.2253 45.7422L29.7744 49.7308L29.8071 49.7213L29.8071 42.4242Z" fill="rgb(235,235,235)" fillRule="nonzero" />
                <path d="M29.7827 24.2098L29.7827 31.2228L38.5286 31.2228L37.7044 40.319L29.7827 42.4306L29.7827 49.727L44.3434 45.7422L44.45 44.5567L46.119 26.0925L46.2923 24.2098L44.378 24.2098L29.7827 24.2098ZM29.7827 10.0131L29.7827 17.0268L46.9388 17.0268L47.0807 15.4502L47.4048 11.8952L47.575 10.0131L29.7827 10.0131Z" fill="rgb(255,255,255)" fillRule="nonzero" />
            </g>
        </svg>
    )
}

export default IconHTML
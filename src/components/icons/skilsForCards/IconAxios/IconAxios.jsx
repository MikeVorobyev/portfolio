const IconAxios = ({ size, color, customClass = '' }) => {
    return (
        <svg className={customClass} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" width={size || 60} height={size || 60} fill="none" >
            <title>Axios</title>
            <g>
                <rect width="60" height="60" x="0" y="0" rx="10" fill={color || "rgb(185, 184, 187)"} />
                <path fill="rgb(90,41,228)" fillRule="nonzero"
                    d="M28.3117 9.76593L28.3117 55.0271L23.3464 59L23.3464 21.3489L14 21.3489L28.3117 9.76593L28.3117 9.76593ZM37.3919 3L37.3919 39.7903L47 39.7903L32.4367 
                    51.6638L32.4367 6.42744L37.3919 3Z" 
                />
            </g>
        </svg>
    )
}
export default IconAxios
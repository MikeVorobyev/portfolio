const IconFigma = ({ size, color, customClass = '' }) => {
    return (
		<svg className={customClass} viewBox="0 0 60 60" width={size || 60} height={size || 60} fill="none"xmlns="http://www.w3.org/2000/svg">
			<title>Figma</title>
			<rect width="60" height="60" x="0" y="0" rx="10" fill={color || "rgb(36,41,56)"} />
			<g>
				<path d="M22.25 55C26.8064 55 30.5 51.2691 30.5 46.6667L30.5 38.3333L22.25 38.3333C17.6936 38.3333 14 42.0644 14 46.6667C14 51.2691 17.6936 55 22.25 55Z" fill="rgb(10,207,131)" fillRule="nonzero" />
				<path d="M14 30C14 25.3976 17.6936 21.6667 22.25 21.6667L30.5 21.6667L30.5 38.3333L22.25 38.3333C17.6936 38.3333 14 34.6023 14 30Z" fill="rgb(162,89,255)" fillRule="nonzero" />
				<path d="M14 13.3334C14 8.73093 17.6936 5 22.25 5L30.5 5L30.5 21.6667L22.25 21.6667C17.6936 21.6667 14 17.9356 14 13.3334Z" fill="rgb(242,78,30)" fillRule="nonzero" />
				<path d="M30.5 5L38.75 5C43.3064 5 47 8.73093 47 13.3334C47 17.9356 43.3064 21.6667 38.75 21.6667L30.5 21.6667L30.5 5Z" fill="rgb(255,114,98)" fillRule="nonzero" />
				<path d="M47 30C47 34.6023 43.3064 38.3333 38.75 38.3333C34.1936 38.3333 30.5 34.6023 30.5 30C30.5 25.3976 34.1936 21.6667 38.75 21.6667C43.3064 21.6667 47 25.3976 47 30Z" fill="rgb(26,188,254)" fillRule="nonzero" />
			</g>
		</svg>
    )
}

export default IconFigma
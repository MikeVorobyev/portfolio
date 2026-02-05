const IconPixo = ({ size, color, customClass = '' }) => {
    return (
        <svg className={customClass} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" width={size || 60} height={size || 60} fill="none">
            <title>Pixo</title>
            <defs>
                <clipPath id="clipPath_0">
                    <rect width="51" height="51" x="5" y="4" fill="rgb(255,255,255)" />
                </clipPath>
                <linearGradient id="paint_linear_0" x1="44.9122086" x2="31.0602493" y1="22.2078362" y2="35.6302528" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgb(255,104,207)" offset="0.107588999" stopOpacity="1" />
                    <stop stopColor="rgb(234,97,230)" offset="0.322614014" stopOpacity="1" />
                    <stop stopColor="rgb(204,81,255)" offset="0.571582973" stopOpacity="1" />
                    <stop stopColor="rgb(121,54,255)" offset="1" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="paint_linear_1" x1="22.9629822" x2="22.9629822" y1="30.2614346" y2="56.4060059" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgb(124,47,255)" offset="0.0918489993" stopOpacity="1" />
                    <stop stopColor="rgb(51,201,255)" offset="0.996089995" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="paint_linear_2" x1="39.3951302" x2="9.10865402" y1="25.476017" y2="13.0270987" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgb(255,104,207)" offset="0.0501599982" stopOpacity="1" />
                    <stop stopColor="rgb(255,144,89)" offset="0.994773984" stopOpacity="1" />
                </linearGradient>
            </defs>
            <rect width="60" height="60" x="0" y="0" rx="10" fill={color || "rgb(61,61,61)"} />
            <g clipPath="url(#clipPath_0)" customframe="url(#clipPath_0)">
                <rect width="51" height="51" x="5" y="4" />
                <path d="M28.48 24.5847L19.3795 14.6057C20.2755 12.8174 21.4828 11.1581 23.0017 9.62812C26.7256 5.87603 31.2261 4 36.503 4C41.7799 4 46.2803 5.87603 50.0044 9.62812C53.7084 13.36 55.5605 17.8597 55.5605 23.1276C55.5605 28.3954 53.7084 32.895 50.0044 36.6269C46.2803 40.3789 41.7799 42.2551 36.503 42.2551L36.503 31.2836C38.7042 31.2836 40.5866 30.4959 42.1504 28.9205C43.7341 27.325 44.5261 25.3939 44.5261 23.1276C44.5261 20.8611 43.7341 18.9301 42.1504 17.3344C40.5866 15.7592 38.7042 14.9714 36.503 14.9714C34.3018 14.9714 32.4193 15.7592 30.8557 17.3344C29.272 18.9301 28.48 20.8611 28.48 23.1276L28.48 24.5847Z" fill="url(#paint_linear_0)" fillRule="evenodd" />
                <path d="M17.4457 32.468L17.4457 55.0002L18.2824 55.0002C23.9146 55.0002 28.4804 50.4605 28.4804 44.8607L28.4804 41.8516C27.0382 41.2318 25.553 40.2747 24.0246 38.9807C21.3013 36.6748 19.1083 34.5041 17.4457 32.468Z" fill="url(#paint_linear_1)" fillRule="evenodd" />
                <path d="M6.89682 15.2146L5 16.927L20.502 33.9015L20.502 33.9013L22.919 36.5541L23.0019 36.6375C26.726 40.3895 31.2264 42.2656 36.5032 42.2656C41.7801 42.2656 46.2807 40.3895 50.0048 36.6375C53.7088 32.9055 55.5608 28.4059 55.5608 23.1381L44.5263 23.1381C44.5263 25.4044 43.7343 27.3354 42.1506 28.9309C40.587 30.5065 38.7045 31.2941 36.5032 31.2941C34.3365 31.2941 32.4786 30.531 30.9295 29.0043L23.5246 20.8775L23.5181 20.8834L18.8649 15.7881C15.7193 12.3438 10.361 12.087 6.89682 15.2146Z" fill="url(#paint_linear_2)" fillRule="evenodd" />
            </g>
        </svg>
    )
}
export default IconPixo
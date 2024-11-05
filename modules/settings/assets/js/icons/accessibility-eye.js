import SvgIcon from '@elementor/ui/SvgIcon';

function AccessibilityEyeIcon( props ) {
	return (
		<SvgIcon
			viewBox="0 0 64 64"
			fill="none"
			fontSize="large"
			sx={ { marginRight: 1 } }
			{ ...props }
		>
			<circle cx="32"
				cy="32"
				r="32" />
			<g clipPath="url(#clip0_3940_26698)">
				<path d="M30.3492 30.3515C29.9116 30.7892 29.6659 31.3827 29.666 32.0016C29.6661 32.6204 29.9121 33.2139 30.3497 33.6514C30.7874 34.0889 31.381 34.3347 31.9998 34.3346C32.6187 34.3345 33.2121 34.0885 33.6497 33.6508M37.4612 37.4518C35.8246 38.4758 33.9304 39.0127 32 39C27.8 39 24.3 36.6667 21.5 32C22.984 29.5267 24.664 27.709 26.54 26.547M29.8767 25.21C30.5755 25.0685 31.2869 24.9982 32 25C36.2 25 39.7 27.3333 42.5 32C41.723 33.295 40.8912 34.4115 40.0057 35.3483M21.5 21.5L42.5 42.5M9.5 32C9.5 34.9547 10.082 37.8806 11.2127 40.6104C12.3434 43.3402 14.0008 45.8206 16.0901 47.9099C18.1794 49.9992 20.6598 51.6566 23.3896 52.7873C26.1194 53.918 29.0453 54.5 32 54.5C34.9547 54.5 37.8806 53.918 40.6104 52.7873C43.3402 51.6566 45.8206 49.9992 47.9099 47.9099C49.9992 45.8206 51.6566 43.3402 52.7873 40.6104C53.918 37.8806 54.5 34.9547 54.5 32C54.5 29.0453 53.918 26.1194 52.7873 23.3896C51.6566 20.6598 49.9992 18.1794 47.9099 16.0901C45.8206 14.0008 43.3402 12.3434 40.6104 11.2127C37.8806 10.082 34.9547 9.5 32 9.5C29.0453 9.5 26.1194 10.082 23.3896 11.2127C20.6598 12.3434 18.1794 14.0008 16.0901 16.0901C14.0008 18.1794 12.3434 20.6598 11.2127 23.3896C10.082 26.1194 9.5 29.0453 9.5 32Z"
					stroke="white"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round" />
			</g>
			<defs>
				<clipPath id="clip0_3940_26698">
					<rect width="48"
						height="48"
						fill="white"
						transform="translate(8 8)" />
				</clipPath>
			</defs>
		</SvgIcon>
	);
}

export default AccessibilityEyeIcon;
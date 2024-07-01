/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			colors: {
				darkBlue: '#10141F',
				lighterBlue: '#161D2F',
				gray: '#4E515A',
			},
		},
		container: {
			padding: '1rem',
			center: true,
		},
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1200px',
			xl: '1440px',
		},
		fontFamily: {
			outfitLight: ['OutfitLight'],
			outfitMedium: ['OutfitMedium'],
		},
	},
	plugins: [],
}

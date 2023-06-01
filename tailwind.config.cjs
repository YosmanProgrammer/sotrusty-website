/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'lato': ['Lato', 'sans-serif'],
			},
			colors: {
				'blue-munsell': '#2A92A9',
				'seasalt': '#FAFAFA',
				'trangerine': '#E58024'
			},
			backgroundImage: {
				'gradient-1': 'linear-gradient(-250deg, rgba(42,146,169,1) 30%, rgba(229,128,36,1) 100%);',
			}
		},
	},
	plugins: [],
}

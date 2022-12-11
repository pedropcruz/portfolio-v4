import { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default <Config>{
	darkMode: 'class',
	content: [
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./assets/**/*.scss',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"SofiaPro"'],
			},
			boxShadow: {
				brand: '0 5px 0 0 #333',
				'brand-invert': '0 5px 0 0 #FFFCF3',
			},
			colors: {
				whitesmoke: '#FFFCF3',
				yellow: {
					...colors.yellow,
					DEFAULT: '#F9CC1C',
				},
				black: '#333',
				current: 'currentColor',
			},
			fontSize: {
				inherit: 'inherit',
			},
		},
	},
	variants: {
		boxShadow: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
		backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
		borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
		textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive'],
	},
	plugins: [require('tailwindcss-dark-mode')(), require('@tailwindcss/typography')()],
};

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	target: 'static',
	css: ['@/assets/styles/main.scss'],
	build: {
		postcss: {
			postcssOptions: require('./postcss.config.ts'),
		},
	},
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
	colorMode: {
		classSuffix: '',
	},
	vite: {
		logLevel: 'info',
	},
	typescript: {
		tsConfig: {
			compilerOptions: {
				strict: true,
			},
		},
	},
});

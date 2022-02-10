module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'old-lavender': '#716D7A',
				'cadet-grey': '#88A8A6',
				'laurel-green': '#B3B898',
				'dark-vanilla': '#D9CAB3',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};

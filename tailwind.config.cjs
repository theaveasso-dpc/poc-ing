/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

// allow to write vertical text
const writingMode = plugin(function ({ addUtilities }) {
	const writingMode = {
		'.horizontal-tb': {
			writingMode: 'horizontal-tb',
		},
		'.vertical-rl': {
			writingMode: 'vertical-rl',
		},
		'.vertical-lr': {
			writingMode: 'vertical-lr',
		},
	};
	addUtilities(writingMode);
});

module.exports = {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['DM Serif Display', 'serif'],
			},
			boxShadow: {
				'top-2xl':
					'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
			},
		},
	},
	plugins: [writingMode],
};

/**
 * A module for managing internationalization within the application
 */
export let language = 'en';

const translations = {
	en: {
		backToList: `Back to List`,
		description: `This is where I store my LeetCode solutions to have them accessible and editable in a sensible manner without having to rely on LeetCode Premium. The project is built with SvelteKit to ensure good web performance and to further improve my development expertise.`,
	},
};

const missingTranslations = {};

/**
 * Returns the translation for the given identifier string
 */
export const translate = (string) => {
	if (translations[language] === undefined || translations[language][string] === undefined) {
		missingTranslations[string] = string.replaceAll(' ', '_').toLocaleUpperCase();
		console.info('Missing translations:', missingTranslations);
		return string;
	} else {
		return translations[language][string];
	}
};

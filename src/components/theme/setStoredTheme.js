const storageKey = 'themeOption';
const setTheme = ({ theme }) => {
	console.log('Setting theme to', theme);
	document.documentElement.classList.remove('light', 'dark', 'system');
	document.documentElement.classList.add(theme);

	localStorage.setItem(storageKey, theme);
};

export default setTheme;

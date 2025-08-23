import { createContext } from 'react';

export const Theme = {
	DARK: 'dark',
	LIGHT: 'light',
	SYSTEM: 'system',
};

export const ThemeProviderContext = createContext({
	theme: Theme.SYSTEM,
	setTheme: () => null,
});

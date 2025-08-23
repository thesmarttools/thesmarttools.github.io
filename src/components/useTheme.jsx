import { useContext } from 'react';
import { ThemeProviderContext } from './themeConstants';

const useTheme = () => {
	const context = useContext(ThemeProviderContext);
	console.log('ThemeProviderContext', ThemeProviderContext);

	if (context === undefined)
		throw new Error('useTheme must be used within a ThemeProvider');

	return context;
};

export default useTheme;

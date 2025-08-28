import './styles.css';

import smartLogo from '@/src/assets/iconlight136w.avif';
import smartLogoDark from '@/src/assets/icondark136w.avif';

import useThemeStore from '@/src/themeStore';
const Logo = () => {
	const theme = useThemeStore((state) => state.theme);
	return (
		<div>
			<img
				src={theme === 'light' ? smartLogoDark : smartLogo}
				className='logo'
				alt='Vite logo'
			/>
		</div>
	);
};

Logo.displayName = 'Logo';
export default Logo;

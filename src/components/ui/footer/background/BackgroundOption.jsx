'use client';
import PropTypes from 'prop-types';
import './styles.css';
import getStoredTheme from '@/src/components/theme/getStoredTheme';
import setTheme from '@/src/components/theme/setStoredTheme';
export function BackgroundOption({ icon, option, label }) {
	const storedTheme = getStoredTheme();
	setTheme({ theme: storedTheme });
	const classActive = option === storedTheme ? 'active' : '';
	return (
		<div
			className={'backgroundOption' + ' ' + classActive}
			data-option={option}
			onClick={(e) => {
				const target = e.currentTarget;
				target.classList.add('active');
				setTheme({ theme: option });
			}}
		>
			<div data-option={option} dangerouslySetInnerHTML={{ __html: icon }} />
			<div>{label && <p>{label}</p>}</div>
		</div>
	);
}
BackgroundOption.propTypes = {
	icon: PropTypes.node.isRequired,
	option: PropTypes.string.isRequired,
	label: PropTypes.string,
};
BackgroundOption.displayName = 'ButtonScenario';
export default BackgroundOption;

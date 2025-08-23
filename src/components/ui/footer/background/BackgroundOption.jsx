'use client';
import PropTypes from 'prop-types';
import './styles.css';
const storageKey = 'themeOption';
const getStoredTheme = () => {
	const storedTheme = localStorage.getItem(storageKey);
	return storedTheme ? storedTheme.toString() : 'system';
};
export function BackgroundOption({ icon, option, label }) {
	const storedTheme = getStoredTheme();
	const classActive = option === storedTheme ? 'active' : '';
	return (
		<div
			className={'backgroundOption' + ' ' + classActive}
			data-option={option}
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

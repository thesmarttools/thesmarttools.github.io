'use client';
import PropTypes from 'prop-types';
import './styles.css';

import useThemeStore from '@/src/themeStore';
export function BackgroundOption({ icon, option, label }) {
	const theme = useThemeStore.getState().theme;
	const classActive = option === theme ? 'active' : '';
	return (
		<div
			className={'backgroundOption' + ' ' + classActive}
			data-option={option}
			onClick={(e) => {
				const target = e.currentTarget;
				target.classList.add('active');
				useThemeStore.setState({ theme: option });
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

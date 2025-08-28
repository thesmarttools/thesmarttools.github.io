// import iconIncreaseFontSize from '/src/assets/text_increase_24dp.svg';
// import iconDescreaseFontSize from '/src/assets/text_decrease_24dp.svg';
import './styles.css';
import FontSettingsIcon from './FontSettingsIcon.jsx';

const ButtonFontSettings = () => {
	return (
		<div className='settings-icon btn btn-font-settings'>
			<div dangerouslySetInnerHTML={{ __html: FontSettingsIcon }} />
		</div>
	);
};

ButtonFontSettings.displayName = 'ButtonSettings';
export default ButtonFontSettings;

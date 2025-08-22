import { Button } from '@/components/ui/button';
import iconIncreaseFontSize from '/src/assets/text_increase_24dp.svg';
import iconDescreaseFontSize from '/src/assets/text_decrease_24dp.svg';
import './buttonStyles.css';
import PropTypes from 'prop-types';

const stepFontSizePx = 2;
const stepScale = 0.2;
//const rootStyles = getComputedStyle(document.documentElement);
const minScale = 1;
const maxScale = 2.5;
const storageKey = 'fontSizeScale';

const getStoredScale = () => {
	const storedScale = localStorage.getItem(storageKey);
	return storedScale ? parseFloat(storedScale) : 1;
};

const setBaseScale = (size) => {
	console.log('setBaseScale', size);
	let curBaseScale = getStoredScale();

	const newScale =
		size === 'increase' ? curBaseScale + stepScale : curBaseScale - stepScale;
	if (newScale >= minScale && newScale <= maxScale) {
		setBaseFontSize(size);
	}
	const newBaseScale = Math.min(Math.max(newScale, minScale), maxScale);
	console.log('newBaseScale', newBaseScale);

	document.documentElement.style.setProperty('--user-scale', newBaseScale);
	localStorage.setItem(storageKey, newBaseScale.toString());
};

const setBaseFontSize = (size) => {
	let baseFontSizeValue = parseFloat(
		getComputedStyle(document.documentElement).fontSize
	);
	baseFontSizeValue =
		size === 'increase'
			? baseFontSizeValue + stepFontSizePx
			: baseFontSizeValue - stepFontSizePx;
	document.documentElement.style.fontSize = baseFontSizeValue + 'px';
	console.log('baseFontSizeValue', baseFontSizeValue);
};

const ButtonFontSize = ({ size }) => {
	const icon =
		size === 'increase' ? iconIncreaseFontSize : iconDescreaseFontSize;
	const alt = size === 'increase' ? 'increase font size' : 'decrease font size';
	const handleClick = () => {
		setBaseScale(size);
	};
	return (
		<div className='btn' onClick={handleClick}>
			<Button variant='outline'>
				<img src={icon} alt={alt} />
			</Button>
		</div>
	);
};

const applyStoredScale = () => {
	const storedScale = getStoredScale();
	console.log('storedScale', storedScale);
	if (storedScale) {
		if (storedScale >= minScale && storedScale <= maxScale) {
			let baseFontSizeValue = parseFloat(
				getComputedStyle(document.documentElement).fontSize
			);
			console.log('baseFontSizeValue', baseFontSizeValue);
			baseFontSizeValue = Math.floor(baseFontSizeValue * storedScale);
			document.documentElement.style.fontSize = baseFontSizeValue + 'px';
			document.documentElement.style.setProperty('--user-scale', storedScale);
			console.log('baseFontSizeValue', baseFontSizeValue);
			//setBaseFontSize(size);
		}
	}
};

applyStoredScale();

ButtonFontSize.propTypes = {
	size: PropTypes.string.isRequired, // or PropTypes.oneOf(['large', 'small'])
};
export default ButtonFontSize;

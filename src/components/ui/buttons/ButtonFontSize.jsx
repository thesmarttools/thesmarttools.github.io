import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import iconIncreaseFontSize from '/src/assets/text_increase_24dp.svg';
import iconDescreaseFontSize from '/src/assets/text_decrease_24dp.svg';
import './buttonStyles.css';
import PropTypes from 'prop-types';

const stepFontSizePx = 1;
const storageKeyBaseFontSize = 'baseFontSize';
let rootFontSize = 16;
const minFontSize = 12;
const maxFontSize = 34;

const getStoredBaseFontSize = () => {
	const storedBaseFontSize = localStorage.getItem(storageKeyBaseFontSize);
	return storedBaseFontSize ? storedBaseFontSize : rootFontSize;
};

const setBaseScale = (size) => {
	// console.log('setBaseScale', size);
	// let curBaseScale = getStoredScale();
	// const newScale =
	// 	size === 'increase' ? curBaseScale + stepScale : curBaseScale - stepScale;
	// if (newScale >= minScale && newScale <= maxScale) {
	// 	setBaseFontSize(size);
	// }
	// const newBaseScale = Math.min(Math.max(newScale, minScale), maxScale);
	// //console.log('newBaseScale', newBaseScale);
	// document.documentElement.style.setProperty('--user-scale', newBaseScale);
	// localStorage.setItem(storageKey, newBaseScale.toString());
};

const setBaseFontSize = (size) => {
	rootFontSize =
		size === 'increase'
			? rootFontSize + stepFontSizePx
			: rootFontSize - stepFontSizePx;
	const newBaseFontSize = Math.min(
		Math.max(rootFontSize, minFontSize),
		maxFontSize
	);
	if (newBaseFontSize >= maxFontSize) rootFontSize = maxFontSize;
	if (newBaseFontSize <= minFontSize) rootFontSize = minFontSize;
	document.documentElement.style.fontSize = newBaseFontSize + 'px';
	localStorage.setItem(storageKeyBaseFontSize, newBaseFontSize.toString());
	console.log('baseFontSizeValue', newBaseFontSize);
};

const ButtonFontSize = ({ size, label }) => {
	const icon =
		size === 'increase' ? iconIncreaseFontSize : iconDescreaseFontSize;
	const alt = size === 'increase' ? 'increase font size' : 'decrease font size';
	const handleClick = () => {
		setBaseFontSize(size);
	};
	return (
		<div className='btn' onClick={handleClick}>
			<Button variant='outline'>
				<img src={icon} alt={alt} />
			</Button>
			<div>{label}</div>
		</div>
	);
};

const applyStoredScale = () => {
	const storedBaseFontSize = getStoredBaseFontSize();

	storedBaseFontSize &&
		(document.documentElement.style.fontSize = storedBaseFontSize + 'px');
};

applyStoredScale();

ButtonFontSize.propTypes = {
	size: PropTypes.string.isRequired, // or PropTypes.oneOf(['large', 'small'])
	label: PropTypes.string,
};
export default ButtonFontSize;

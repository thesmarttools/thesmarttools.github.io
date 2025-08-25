import QRCodeIcon from '@/src/assets/QRCode.png';
import QRCodeIconDark from '@/src/assets/QRCodeDark.png';

import getStoredTheme from '@/src/components/theme/getStoredTheme';
import './styles.css';
import PropTypes from 'prop-types';

const QRCode = () => {
	const theme = getStoredTheme();
	return (
		<div className='QRCode'>
			<div>Scan QR Code to share the app</div>
			<img src={theme === 'light' ? QRCodeIcon : QRCodeIconDark} alt='QRCode' />
		</div>
	);
};
QRCode.propTypes = {
	label: PropTypes.string.isRequired,
	callback: PropTypes.func,
};
QRCode.displayName = 'QRCode';
export default QRCode;

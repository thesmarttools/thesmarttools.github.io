import { useState, useEffect } from 'react';
// import androidIcon from '../../assets/share_android.svg';
// import iosIcon from '../../assets/share_apple.svg';
import ShareIconAndroid from './ShareIconAndroid';
import ShareIconApple from './ShareIConApple';

const ShareIcon = () => {
	const [isAndroid, setIsAndroid] = useState(false);
	const [isIOS, setIsIOS] = useState(false);

	useEffect(() => {
		const userAgent = navigator.userAgent;
		const isAndroid = userAgent.match(/Android/i);
		const isIOS = userAgent.match(/iPhone|iPad|iPod/i);

		setIsAndroid(isAndroid);
		setIsIOS(isIOS);
	}, []);

	return (
		<div>
			{isAndroid && (
				<div className='share-icon btn'>
					<div dangerouslySetInnerHTML={{ __html: ShareIconAndroid }} />
				</div>
			)}
			{isIOS && (
				<div className='share-icon btn'>
					<div dangerouslySetInnerHTML={{ __html: ShareIconApple }} />
				</div>
			)}
			{isAndroid === null && isIOS === null && (
				<div className='share-icon btn'>
					<div dangerouslySetInnerHTML={{ __html: ShareIconAndroid }} />
				</div>
			)}
		</div>
	);
};
export default ShareIcon;

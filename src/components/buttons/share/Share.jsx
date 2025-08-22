import ShareIcon from './ShareIcon';
import './styles.css';
const ShareButton = () => {
	const handleShare = async () => {
		try {
			await navigator.share({
				title: 'Share this page',
				text: 'Check out this awesome page!',
				url: window.location.href,
			});
		} catch (error) {
			console.error('Error sharing:', error);
		}
	};

	return (
		<button onClick={handleShare}>
			<ShareIcon />
		</button>
	);
};
export default ShareButton;

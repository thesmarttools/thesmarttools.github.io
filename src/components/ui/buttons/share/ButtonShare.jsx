import ShareIcon from './ShareIcon';
import './styles.css';
const ButtonShare = () => {
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
		<div className='share-icon btn'>
			<button onClick={handleShare}>
				<ShareIcon />
			</button>
		</div>
	);
};
export default ButtonShare;

import UpdateIcon from './UpdateIcon';
import './styles.css';
const ButtonUpdate = () => {
	const handleClick = async () => {
		location.reload();
	};

	return (
		<div className='update-icon btn'>
			<button onClick={handleClick}>
				<div>
					<div dangerouslySetInnerHTML={{ __html: UpdateIcon }} />
				</div>
			</button>
		</div>
	);
};
export default ButtonUpdate;

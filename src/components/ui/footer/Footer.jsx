import metadata from '../../../../src/metadata.json';
import './styles.css';
function FooterComponent() {
	return (
		<div className='version-footer'>
			{/* &copy; 2020 RichHewlett.com */}
			<div className='sf-footer-version'>
				{`Version ${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision} ${metadata.buildTag}`}
			</div>
		</div>
	);
}
export default FooterComponent;

import smartLogo from './assets/iconwhite.png';
import './globals.css';
import './App.css';

import androidWhiteLogo from './assets/Android_logo_white_30x30.svg';
import appleWhiteLogo from './assets/Apple_logo_white_30x30.svg';

import AccordionAcro from './components/ui/AcronymAccordion/AccordionAcro.jsx';

import SettingsDrawer from './components/ui/settings/SettingsDrawer.jsx';
import FontSizeDrawer from './components/ui/settings/FontSIzeDrawer.jsx';
import FooterMetadata from './components/ui/footer/FooterMetadata.jsx';
import getStoredTheme from '@/src/components/theme/getStoredTheme';
import setTheme from '@/src/components/theme/setStoredTheme';

function App() {
	setTheme({ theme: getStoredTheme() });
	return (
		<div className='app'>
			<div className='main'>
				<div className='inner'>
					<div className='settingsContainer'>
						<SettingsDrawer />
						<FontSizeDrawer />
					</div>
					<div className='header'>
						<div>
							<img src={smartLogo} className='logo' alt='Vite logo' />
						</div>
						<h1>
							What the
							<br />
							S.M.A.R.T?
						</h1>
						<div className='subtitle'>
							The tools we learn at SMART meetings are ace but remembering them
							can be hard. This app was created so that you don&apos;t have to!
						</div>
						<div className='subtitle start'>
							Tap a heading to find out about the tool.
						</div>
					</div>

					<AccordionAcro />

					<div className='footer'>
						<div className='install'>
							Add to you home screen video instructions
						</div>
						<div className='links'>
							<a
								href='https://www.youtube.com/watch?v=O1xEXKB6tNg'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img
									src={androidWhiteLogo}
									className='logo'
									alt='Android logo'
								/>
								<div>Android</div>
							</a>
							<a
								href='https://www.youtube.com/watch?v=B7fKs4dTeu0'
								target='_blank'
								rel='noopener noreferrer'
							>
								<img src={appleWhiteLogo} className='logo' alt='Apple logo' />
								<div>Apple iOS</div>
							</a>
						</div>
					</div>
				</div>
				<FooterMetadata />
			</div>
		</div>
	);
}

export default App;

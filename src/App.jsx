import { createContext, useContext, useEffect, useState } from 'react';
import smartLogo from './assets/iconlight.png';
import './globals.css';
import './App.css';
import AccordionAcro from './components/ui/AcronymAccordion/AccordionAcro.jsx';
import SettingsDrawer from './components/ui/settings/SettingsDrawer.jsx';
import FontSizeDrawer from './components/ui/settings/FontSIzeDrawer.jsx';
import FooterMetadata from './components/ui/footer/FooterMetadata.jsx';
import getStoredTheme from '@/src/components/theme/getStoredTheme';
import setTheme from '@/src/components/theme/setStoredTheme';
import iconAndroid from '@/src/components/icons/iconAndroid.jsx';
import iconApple from '@/src/components/icons/iconApple.jsx';

function App() {
	setTheme({ theme: getStoredTheme() });
	const [filterFavourites, setFilterFavourites] = useState(false);
	// useEffect(() => {
	// 	console.log('filterFavourites', filterFavourites);
	// 	localStorage.setItem('filterFavs', filterFavourites);
	// }, [filterFavourites]);
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
							<p>
								The tools we learn at SMART meetings are ace but remembering
								them can be hard.
							</p>
							<p>
								This app is your SMART toolbox so you can carry them around for
								whenever you need them.
							</p>
						</div>
						<div className='subtitle start'>
							Tap a heading to read out about the tool.
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
								<div
									className='android logo'
									dangerouslySetInnerHTML={{ __html: iconAndroid }}
								/>
								<div>Android</div>
							</a>
							<a
								href='https://www.youtube.com/watch?v=B7fKs4dTeu0'
								target='_blank'
								rel='noopener noreferrer'
							>
								<div
									className='apple logo'
									dangerouslySetInnerHTML={{ __html: iconApple }}
								/>
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

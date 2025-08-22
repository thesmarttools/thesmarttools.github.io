import smartLogo from './assets/iconwhite.png';
import './App.css';

import androidWhiteLogo from './assets/Android_logo_white_30x30.svg';
import appleWhiteLogo from './assets/Apple_logo_white_30x30.svg';

import AccordionAcro from './components/ui/AccordionAcro.jsx';
import ButtonFontSize from './components/buttons/ButtonFontSize.jsx';

import Share from './components/buttons/share/Share.jsx';

// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker
// 		.register('/sw.js')
// 		.then(() => console.log('Service Worker registered.'))
// 		.catch((err) => console.log('Service Worker failed:', err));
// }
// window.addEventListener('beforeinstallprompt', (e) => {
// 	e.preventDefault();
// 	deferredPrompt = e;
// 	installBtn.style.display = 'inline-block';
// });
// const installBtnClick = () => {
// 	//installBtn.addEventListener('click', async () => {
// 		installBtn.style.display = 'none';
// 		deferredPrompt.prompt();
// 		const choiceResult = await deferredPrompt.userChoice;
// 		console.log('User choice:', choiceResult.outcome);
// 		deferredPrompt = null;
// 	//});
// };
function App() {
	return (
		<>
			<div className='app'>
				<div className='main'>
					<div className='inner'>
						<div className='settings'>
							<ButtonFontSize size='decreasse' />
							<ButtonFontSize size='increase' />
							<Share />
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
								The tools we learn at SMART meetings are ace but remembering
								them can be hard. This app was created so that you don&apos;t
								have to!
							</div>
							<div className='subtitle start'>
								Tap a heading to find out about the tool.
							</div>
							<div className='subtitle tip'>
								TIP: If you are using an Android or iOS device, there are
								buttons at the bottom to videos that show you how to add this
								webapp as an app on your homescreen for quick access.
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
				</div>
			</div>
		</>
	);
}

export default App;

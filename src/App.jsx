import smartLogo from './assets/iconwhite.png';
import './App.css';

import AccordionAcro from './components/ui/AccordionAcro.jsx';
import ButtonFontSize from './components/buttons/ButtonFontSize.jsx';
function App() {
	return (
		<>
			<div className='app'>
				<div className='main'>
					<div className='inner'>
						<div className='fontSizesCont'>
							<ButtonFontSize size='decreasse' />
							<ButtonFontSize size='increase' />
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
								them can be hard. This app was created so that you don&Apos;t
								have to!
								<br />
								<br />
								If you are using an Android or iOS device, there are buttons at
								the bottom to add this webpage as an app on your homescreen.
							</div>
						</div>

						<AccordionAcro />

						<div className='footer'>
							<div className='install'>Add to you home screen</div>
							<div className='links'>
								<a
									href='https://www.youtube.com/watch?v=O1xEXKB6tNg'
									target='_blank'
									rel='noopener noreferrer'
								>
									Android
								</a>
								<a
									href='https://www.youtube.com/watch?v=B7fKs4dTeu0'
									target='_blank'
									rel='noopener noreferrer'
								>
									Apple iOS
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

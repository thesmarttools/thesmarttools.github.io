'use client';
import { Button } from '@/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerTrigger,
	DrawerTitle,
} from '@/components/ui/drawer';
import './styles.css';

import ButtonSettings from '../buttons/settings/ButtonSettings.jsx';
import CheckboxOffline from '../footer/offlineCheckbox/OfflineCheckbox.jsx';
import BackgroundOptions from '../footer/background/BackgroundOptions';
import CheckboxFilterFavourites from '@/src/components/ui/CheckboxFilterFavourites/CheckboxFilterFavourites.jsx';
import ButtonUpdate from '../buttons/update/ButtonUpdate.jsx';
export function SettingsDrawer() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<div className='settings'>
					<ButtonSettings />
				</div>
			</DrawerTrigger>
			<div className='settingsDrawerMain'>
				<DrawerContent className='DrawerContent'>
					<DrawerTitle className='hide'>TItle</DrawerTitle>
					<div className='settingsDrawerCont'>
						<div className='settingsDrawer'>
							<div>Theme</div>
							<BackgroundOptions />
						</div>
						<div className='settingsDrawer'>
							<CheckboxOffline />
							<ButtonUpdate />
						</div>

						<CheckboxFilterFavourites />

						<div className='settingsDrawer subtitle tip'>
							<h3>Install as an app</h3>
							<p>
								Android or iOS users:, There are video guides at the bottom of
								the main screen that show you how to add this website as an app
								on your homescreen. Close this window and scroll down
							</p>
						</div>
						<DrawerFooter className='drawerFooter'>
							<DrawerClose asChild>
								<Button variant='outline'>Close</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</DrawerContent>
			</div>
		</Drawer>
	);
}
export default SettingsDrawer;

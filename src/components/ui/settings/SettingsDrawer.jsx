'use client';
import { Button } from '@/components/ui/button';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer';
import './styles.css';
import ButtonFontSize from '../buttons/ButtonFontSize.jsx';
import ButtonShare from '../buttons/share/ButtonShare.jsx';
import ButtonUpdate from '../buttons/update/ButtonUpdate.jsx';
import ButtonSettings from '../buttons/settings/ButtonSettings.jsx';

export function SettingsDrawer() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<div className='settings'>
					<ButtonSettings />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm'>
					<DrawerHeader>
						<DrawerTitle>Settings</DrawerTitle>
					</DrawerHeader>
					<div className='settingsDrawer'>
						<ButtonFontSize size='decreasse' />
						<ButtonFontSize size='increase' />
						<ButtonShare />
						<ButtonUpdate />
					</div>
					<DrawerFooter className='drawerFooter'>
						<DrawerClose asChild>
							<Button variant='outline'>Close</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
export default SettingsDrawer;

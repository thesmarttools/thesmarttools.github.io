import { Button } from '@/components/ui/button';
import {
	Dialog,
	// DialogClose,
	DialogContent,
	DialogDescription,
	// DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
import PropTypes from 'prop-types';
import './styles.css';
// import classNames from 'classnames';

function ScenarioDialog({ btnLabel, title, content }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>{btnLabel}</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{content}</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
ScenarioDialog.propTypes = {
	btnLabel: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
};
export default ScenarioDialog;

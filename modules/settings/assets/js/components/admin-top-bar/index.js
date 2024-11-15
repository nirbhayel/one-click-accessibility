import HelpIcon from '@elementor/icons/HelpIcon';
import AppBar from '@elementor/ui/AppBar';
import Link from '@elementor/ui/Link';
import Toolbar from '@elementor/ui/Toolbar';
import { __ } from '@wordpress/i18n';
import { HELP_LINK } from '../../constants';

export const AdminTopBar = () => {
	return (
		<AppBar position="static">
			<Toolbar direction="row"
				sx={ {
					justifyContent: 'end',
					alignItems: 'center',
					backgroundColor: 'background.default',
					gap: '10px',
					borderBottom: '1px solid rgba(0, 0, 0, 0.12)\n',
				} }
				padding={ 2 }>
				<Link color="secondary"
					underline="hover"
					href={ HELP_LINK }
					target="_blank"
					sx={ { display: 'inline-flex', alignItems: 'center', gap: 1 } }
					aria-label={ __( 'Help', 'pojo-accessibility' ) }>
					<HelpIcon />
				</Link>
			</Toolbar>
		</AppBar>
	);
};

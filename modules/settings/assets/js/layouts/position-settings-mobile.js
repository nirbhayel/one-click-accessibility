import Box from '@elementor/ui/Box';
import FormControlLabel from '@elementor/ui/FormControlLabel';
import Switch from '@elementor/ui/Switch';
import Typography from '@elementor/ui/Typography';
import { __ } from '@wordpress/i18n';
import { AlignmentMatrixControl, PositionControl } from '../components';
import { useIconPosition } from '../hooks';

export const PositionSettingsMobile = () => {
	const { iconPosition, updateIconPosition } = useIconPosition();

	const toggleVisibility = ( device ) => {
		updateIconPosition( device, 'hidden', ! iconPosition[ device ].hidden );
	};

	const toggleExactPosition = ( device ) => {
		updateIconPosition( device, 'enableExactPosition', ! iconPosition[ device ].enableExactPosition );
	};

	return (
		<>
			<FormControlLabel label={ <Typography variant="subtitle2">{ __( 'Hide on desktop', 'pojo-accessibility' ) }</Typography> }
				labelPlacement="start"
				control={ <Switch color="info" /> }
				sx={ { marginLeft: 0, marginBottom: 3 } }
				onChange={ () => toggleVisibility( 'mobile' ) } />
			{ ! iconPosition.mobile.hidden &&
				<Box display="grid"
					gridTemplateColumns="repeat(2,1fr)"
					gap={ 3 }>
					<AlignmentMatrixControl mode="mobile" />
					<Box>
						<FormControlLabel label={ <Typography variant="subtitle2">{ __( 'Exact position', 'pojo-accessibility' ) }</Typography> }
							labelPlacement="start"
							control={ <Switch color="info" /> }
							sx={ { marginLeft: 0 } }
							onChange={ () => toggleExactPosition( 'mobile' ) } />
						<PositionControl type="horizontal"
							mode="mobile"
							disabled={ ! iconPosition.mobile?.enableExactPosition } />
						<PositionControl type="vertical"
							mode="mobile"
							disabled={ ! iconPosition.mobile?.enableExactPosition } />
					</Box>
				</Box>
			}
		</>
	);
};

import { useState, createContext, useContext } from '@wordpress/element';

/**
 * Context Component.
 */
const SettingsContext = createContext( null );

export function useSettings() {
	return useContext( SettingsContext );
}

const SettingsProvider = ( { children } ) => {
	const [ test, setTest ] = useState( 'Test' );
	return (
		<SettingsContext.Provider
			value={ {
				test,
				setTest,
			} }
		>
			{ children }
		</SettingsContext.Provider>
	);
};

export default SettingsProvider;

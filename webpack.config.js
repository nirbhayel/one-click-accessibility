const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// add your entry points here
const entryPoints = {
	admin: path.resolve(
		process.cwd(),
		'modules/settings/assets/js',
		'admin.js',
	),
};

module.exports = {
	...defaultConfig,
	entry: entryPoints,
	output: {
		...defaultConfig.output,
		path: path.resolve( process.cwd(), 'assets/build' ),
	},
	resolve: {
		alias: {
			'@ea11y/hooks': path.resolve( __dirname, 'modules/settings/assets/js/hooks/' ),
			'@ea11y/components': path.resolve( __dirname, 'modules/settings/assets/js/components/' ),
		},
		extensions: [ '.js', '.jsx' ],
	},
};

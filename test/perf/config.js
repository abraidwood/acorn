module.exports = {
	acorn: require('../../acorn.js'),

	acornOptions: {
		ecmaVersion: 5,
		strictSemicolons: false,
		allowTrailingCommas: true,
		forbidReserved: false,
		trackComments: false,
		locations: false,
		ranges: false,
		program: null,
		sourceFile: null
	},

	// Test Options
	maxTime: 5,

	sourcesDir: './3rdParty',

	sources: [
		{name: 'underscore-1.4.1'},
		{name: 'backbone-0.9.2'},
		{name: 'codemirror-2.34'},
		{name: 'jquery-1.8.2'},
		{name: 'angular-1.0.2'},
		{name: 'threejs-r51'}
		//,
//		{name: 'esprima'},
//		{name: 'jquery.mobile-1.2.0'},
//		{name: 'mootools-1.4.1'},
//		{name: 'parse-js'},
	],

	resultsFile: './results.csv'
};
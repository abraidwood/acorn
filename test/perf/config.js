module.exports = {
	acorn: require('../../acorn.js'),

	maxTime: 5,

	sourcesDir: './3rdParty',

	sources: [
		{name: 'angular-1.0.2'},
		{name: 'backbone-0.9.2'},
		{name: 'codemirror-2.34'},
//		{name: 'esprima'},
		{name: 'jquery-1.8.2'},
		{name: 'jquery.mobile-1.2.0'},
//		{name: 'mootools-1.4.1'},
//		{name: 'parse-js'},
		{name: 'threejs-r51'},
		{name: 'underscore-1.4.1'}
	],

	resultsFile: './results.csv'
};
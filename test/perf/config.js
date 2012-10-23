module.exports = {
	acorn: require('../../acorn.js'),

	maxTime: 1,

	sourcesDir: './3rdParty',

	sources: [
		{name: 'underscore-1.4.1'},
		{name: 'backbone-0.9.2'}
	],

	resultsFile: './results.csv'
};
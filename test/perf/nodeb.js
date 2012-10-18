/*jshint evil: false, bitwise:false, strict: true, undef: true, white:true, onevar:false, browser:true, plusplus:false */
/*global  */

(function() {
	"use strict";

	var fs = require('fs');
	var acorn = require('../../acorn.js');

	var sourcesDir = '../3rdParty/';
	var sources = require('./results.js').sources;

	sources.forEach(function(source) {
		source.text = fs.readFileSync(sourcesDir + source.name + '.js', 'utf8');
		source.time = source.time || 1000000;
	});

	var Benchmark = require('benchmark');

	var tree = [];
	sources.forEach(function(source) {
		var benchmark = new Benchmark(source.name, function() {
			var syntax = this.options.acorn.parse(this.options.source.text);
			tree.push(syntax.body.length);
		}, {
			source: source,
			acorn: acorn,
			async: false,
			onComplete: function() {
				console.log(this);
			}
		});
		benchmark.run();
	});

})();

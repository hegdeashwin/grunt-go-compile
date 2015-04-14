/*
 * grunt-go-compile
 * https://github.com/hegdeashwin/grunt-go-compile
 *
 * Copyright (c) 2015 Ashwin Hegde
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/**/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: 'config/.jshintrc'
			}
		},

		jscs: {
			options: {
				config: 'config/.jscsrc'
			},
			src: [
				'Gruntfile.js',
				'tasks/**/*.js'
			]
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		go: {
			compile: {
				options: {},
				files: {
					'tmp/HelloWorld.go': 'test/fixtures/HelloWorld.go'
				}
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'go', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'jscs', 'test']);

};
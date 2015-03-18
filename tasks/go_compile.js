/*
 * grunt-go-compile
 * https://github.com/hegdeashwin/grunt-go-compile
 *
 * Copyright (c) 2015 Ashwin Hegde
 * Licensed under the MIT license.
 */

'use strict';

var syncExec = require('shelljs').exec

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('go_compile', 'Compile Go files.', function() {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			separator: ', '
		});

		// Iterate over all specified file groups.
		this.files.forEach(function(f) {
			// Concat specified files.
			var src = f.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {
				// Read file source.
				console.log("filepath: ", filepath);

				var GO_RUN_CMD = "go run " + filepath;
				out = syncExec(GO_RUN_CMD);

				return grunt.file.read(filepath);
			}).join(grunt.util.normalizelf(options.separator));

			// Write the destination file.
			grunt.file.write(f.dest, src);

			// Print a success message.
			grunt.log.writeln('File "' + f.dest + '" created.');
		});
	});

};
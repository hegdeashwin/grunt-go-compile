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
	grunt.registerMultiTask('go', 'Compile Go files', function() {
		var options = this.options({
			separator: ', '
		});

		this.files.forEach(function(f) {
			var src = f.src.filter(function(filepath) {
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {

				syncExec("go run " + filepath);

				return grunt.file.read(filepath);
			}).join(grunt.util.normalizelf(options.separator));

			// Write the destination file.
			grunt.file.write(f.dest, src);

			// Print a success message.
			grunt.log.writeln('File "' + f.dest + '" created.');
		});
	});

};
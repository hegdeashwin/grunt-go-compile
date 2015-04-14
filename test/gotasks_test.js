'use strict';

var grunt = require('grunt');

exports.go = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  compile: function(test) {
    var actual = grunt.file.read('tmp/HelloWorld.go');
    var expected = grunt.file.read('test/expected/HelloWorld.go');
    test.equal(actual, expected, 'Expected and generated test file should be same');
    test.done();
  }
};
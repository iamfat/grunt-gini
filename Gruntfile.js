/*
* grunt-gini
* https://github.com/iamfat/grunt-gini
*
* Copyright (c) 2013 Jia Huang
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
            'Gruntfile.js',
            'tasks/*.js',
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint']);

};

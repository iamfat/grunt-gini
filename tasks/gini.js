/*
* grunt-gini
* https://github.com/iamfat/grunt-gini
*
* Copyright (c) 2013 Jia Huang
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    var config = grunt.config('gini');
    var _ = require('lodash');
    
    _.defaults(config, {
        bower:{},
        update:{},
    });

    grunt.config('gini', config);

    function _bower(self) {

        // grunt.log.writeln('Merging')
        var gini = grunt.file.readJSON('gini.json');
        var options = self.options();

        var bower = {
            name: gini.shortname,
            version: gini.version,
            authors: gini.authors || [],
            license: "proprietary",
            private: true,
            ignore: [
                "**/.*", "node_modules",
                "bower_components",
                "test", "tests"
            ],
            dependencies: options.dependencies || {} 
        };
        
        grunt.log.writeln("gini.json => bower.json");
        grunt.log.write(JSON.stringify(bower, null, '    '));
        grunt.file.write('bower.json', JSON.stringify(bower, null, '    '));
    }

    function _update(self) {

        var done = self.async();
        var exec = require('child_process').exec;
        exec('gini app cache', function(error, stdout, stderr) {
            
            grunt.log
                .writeln().writeln('\x1b[1m😃  gini app cache\x1b[0m')
                .write(stdout).write(stderr);
            
            require('async').parallel([
                function(callback){
                    exec('gini app update web', function(error, stdout, stderr) {
                        grunt.log
                            .writeln().writeln('\x1b[1m😃  gini app update-web\x1b[0m')
                            .write(stdout).write(stderr);
                        callback(null, 'update web');
                    });
                },
                function(callback){
                    exec('gini app update orm', function(error, stdout, stderr) {
                        grunt.log
                            .writeln().writeln('\x1b[1m😃  gini app update-orm\x1b[0m')
                            .write(stdout).write(stderr);
                        callback(null, 'update orm');
                    });
                }
            ],
            // optional callback
            function(err, results){
                // the results array will equal ['one','two'] even though
                // the second function had a shorter timeout.
                done(err);
            });

        });
        

    }

    grunt.registerMultiTask('gini', 'Grunt plugins for Gini PHP Framework.', function() {
        switch (this.target) {
        case 'update':
            _update(this);
            break;
        case 'bower':
            _bower(this);
            break;
        }
    });


};

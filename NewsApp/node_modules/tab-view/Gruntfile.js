'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bt: {
            dist: 'dist',
            build: {
                files: {
                    'dist/tab-view.js': ['src/tab-view.js']
                },
                browserifyOptions: {
                    standalone: 'tab-view'
                }
            },
            min: {
                files: {
                    'dist/tab-view-min.js': ['dist/tab-view.js']
                }
            },
            banner: {
                files: ['dist/*']
            },
            tests: {
                mocha: {
                    src: ['tests/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('build-tools');
};
'use strict';

module.exports = function (grunt) {
  // Loads in any grunt tasks in the package.json file
  // https://github.com/sindresorhus/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  var taskConfig = {
    // Clear files and folders
    // https://github.com/gruntjs/grunt-contrib-clean
    clean: {
      demo: ['demo/styles'],
      test: ['test/output']
    },

    // Run tasks whenever watched files change
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      sass: {
        options: {
          livereload: true
        },
        files: ['sass/**/*.scss', 'demo/styles/app.scss'],
        tasks: ['sass:demo'],
      }
    },

    // Start a static web server.
    // https://github.com/gruntjs/grunt-contrib-connect
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      demo: {
        options: {
          open: true,
          base: ['demo']
        }
      }
    },

    // Compile Sass to CSS using node-sass
    // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
        includePaths: ['sass'],
        sourceMap: true
      },
      demo: {
        files: {
          'demo/styles/app.css': 'demo/styles/app.scss'
        }
      }
    },

    // Run Mocha tests
    // https://github.com/jamescarr/grunt-mocha-cli
    mochacli: {
      all: ['test/test_shim.js']
    },

    // Create documentation with SassDoc
    // https://github.com/SassDoc/grunt-sassdoc
    sassdoc: {
      src: 'sass/'
    }
  };
  
  grunt.initConfig(taskConfig);

  grunt.registerTask('test', ['clean:test', 'mochacli']);
  grunt.registerTask('server', ['clean:demo', 'sass:demo', 'connect:demo', 'watch']);
  grunt.registerTask('noserver', ['clean:demo', 'sass:demo', 'watch']);
  grunt.registerTask('default', ['server']);

};
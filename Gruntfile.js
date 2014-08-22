(function() {
  'use strict';
  module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      wp: {
        theme: 'hybrid-base'
      },
      watch: {
        grunt: {
          files: ['Gruntfile.js']
        },
        options: {
          livereload: true
        },
        sass: {
          files: 'themes/<%= wp.theme %>/styles/scss/{,*/}*.scss',
          tasks: ['compass']
        },
        livereload: {
          files: ['themes/<%= wp.theme %>/{,*/}*.php', 'themes/<%= wp.theme %>/{,*/}*.js', 'themes/<%= wp.theme %>/img/*.{png,jpg,webp,svg}']
        }
      },
      compass: {
        dist: {
          options: {
            config: 'config.rb'
          },
          files: {
            'themes/<%= wp.theme %>/styles/css/main.css': 'themes/<%= wp.theme %>/styles/scss/main.scss'
          }
        }
      },
      autoprefixer: {
        options: {
            browsers: ['last 2 versions', 'ie 9', 'ios 6', 'android 4'],
            map: true
        },
        main: {
            src: 'themes/<%= wp.theme %>/styles/css/main.css',
            dest: 'themes/<%= wp.theme %>/styles/css/main.css'
        }
      },

      pleeease: {
        dist: {
          options: {
            fallbacks: {
              autoprefixer: true,
              rem: ['16px', {replace: false}]
            },
            optimizers: {
              minifier: false,
              mqpacker: true
            }
          },
          files: {
            'themes/<%= wp.theme %>/styles/css/main.css': 'themes/<%= wp.theme %>/styles/css/main.css'
          }
        }
      },
      buildcontrol: {
  			options: {
  				dir: 'themes/<%= wp.theme %>',
  				commit: true,
  				push: true,
  				message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
  			},
  			prod: {
  				options: {
  					remote: 'git@github.com:isologic/deathstar.git',
  					branch: 'master'
  				}
  			}
  		},
      php: {
        app: {
          options: {
            base: ".",
            keeplive: true,
            open: true
          }
        }
      }
    });
    grunt.registerTask('build', ['compass']);
    grunt.registerTask('git', ['build', 'buildcontrol']);
    return grunt.registerTask('default', ['build', 'watch']);
  };

}).call(this);

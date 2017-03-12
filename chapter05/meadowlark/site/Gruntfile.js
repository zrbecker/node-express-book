module.exports = function(grunt) {
  // Load Plugins
  [
    'grunt-cafe-mocha',
    'grunt-contrib-jshint',
    'grunt-exec'
  ].forEach(function(task) {
    grunt.loadNpmTasks(task);
  });

  // Configure Plugins
  grunt.initConfig({
    cafemocha: {
      all: { src: 'qa/tests-*.js', options: { ui: 'tdd' }, }
    },
    jshint: {
      app: [ 'meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js' ],
      qa: [ 'Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js' ],
    },
    exec: {
      linkchecker: { cmd: 'linkcheck http://localhost:3000' }
    },
  });

  // Register Tasks
  grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};
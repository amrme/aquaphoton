module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['bower_components/jquery/src/jquery.js', 'bower_components/components-bootstrap/js/bootstrap.js', 'js/main.js'],
        },
      },
    },
    watch: {
      scripts: {
        files: ['js/main.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};

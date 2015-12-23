module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        options: {
          sourceMap: true,
          dumpLineNumbers: 'comments',
          relativeUrls: true,
        },
        files: {
          'css/bootstrap.css': 'bower_components/components-bootstrap/less/bootstrap.less',
          'css/main.css': 'less/main.less',
        },
      },
      production: {
        options: {
          cleancss: true,
          compress: true,
          relativeUrls: true,
        },
        files: {
          'css/bootstrap.css': 'bower_components/components-bootstrap/less/bootstrap.less',
        },
      },
    },
    cssmin: {
      target: {
        files: {
          'css/main.min.css': ['css/bootstrap.css', 'css/bootstrap-theme.css', 'css/animate.css', 'css/main.css'],
        },
      },
    },
    uglify: {
      my_target: {
        files: {
          'js/main.min.js': ['js/wow.min.js', 'js/context.js', 'js/main.js'],
        },
      },
    },
    watch: {
      scripts: {
        files: ['js/main.js', 'js/context.js', 'less/main.less', 'less/mixins.less', 'css/bootstrap.css', 'bower_components/components-bootstrap/less/bootstrap.less'],
        tasks: ['uglify', 'less', 'cssmin'],
        options: {
          spawn: false,
        },
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};

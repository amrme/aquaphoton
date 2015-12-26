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
    imagemin: {
    png: {
      options: {
        optimizationLevel: 7
      },
      dynamic: {
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'website/raw/',
          src: ['**/*.png'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: 'website/img/',
          ext: '.png'
        }
      ]
    }
    },
    jpg: {
      options: {
        progressive: true
      },
      dynamic: {
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'website/raw/',
          src: ['**/*.jpg'],
          // Could also match cwd. i.e. project-directory/img/
          dest: 'website/img/',
          ext: '.jpg'
        }
      ]
    }
    }
  }
    ,
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

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('imagemin', ['imagemin']); // execute on both .png and .jpg
  grunt.registerTask('default', ['watch']);
};

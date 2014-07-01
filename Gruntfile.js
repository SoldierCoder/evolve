module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        curly: true,
        eqeqeq: true
      },
      target1: ['Gruntfile.js', 'js/app.js']
    },
    copy: {
      main: {
        files: [
          { 
            expand: true, 
            flatten: true, 
            src: ['*'], 
            cwd: '/home/ed/JS/bower_components/foundation/css',  
            dest: 'css/', filter: 'isFile'
          },
          { 
            expand: true, 
            flatten: true, 
            src: ['*.min.js'], 
            cwd: '/home/ed/JS/bower_components/foundation/js',  
            dest: 'js/', filter: 'isFile'
          },
          { 
            expand: true, 
            flatten: true, 
            src: ['*.js'], 
            cwd: '/home/ed/JS/bower_components/modernizr',  
            dest: 'js/', filter: 'isFile'
          },
          { 
            expand: true, 
            flatten: true, 
            src: ['angular.min.js'], 
            cwd: '/home/ed/JS/bower_components/angular',  
            dest: 'js/', filter: 'isFile'
          },
          { 
            expand: true, 
            flatten: true, 
            src: ['jquery.min.js'], 
            cwd: '/home/ed/JS/bower_components/jquery/dist',  
            dest: 'js/', filter: 'isFile'
          },
         /*
	  {
            expand: true,
	    flatten: true,
            src: ['index.html'],
            cwd: '/home/ed/JS/BoilerPlate/Angular-Foundation',
            dest: '.', filter: 'isFile'
          },
	 */
	  {
	    expand: true,
	    flatten: true,
	    src: ['*.png'],
	    cwd: '/home/ed/JS/resume/images',
	    dest: 'images/', filter: 'isFile'
	  }
        ]
      },
      coffee: {
        target1: {
          expand: true,
          flatten: true,
          cwd: 'src/',
          src: ['*.coffee'],
          dest: 'js/',
          ext: '.js'
        }
      },

    }
  });


  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.registerTask('default', ['copy','jshint']);
  grunt.registerTask('lint', ['jshint']);
};

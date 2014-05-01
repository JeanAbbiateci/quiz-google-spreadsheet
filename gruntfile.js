module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			
				port: 8000,
				
			
		},
		
		watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['index.html'],
      },
      js: {
        files: ['js/**/*.js'],
        
      },
      css: {
        files: ['css/scss/**/*.scss'],
        
      },
      
      css: {
        files: ['css/scss/**/*.scss'],
        
      },
		
		
		
	});
 	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-connect');
	grunt.registerTask('default', 'connect','watch');
	
};

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			
				port: 8000,
				
			
		}
	});

	grunt.loadNpmTasks('grunt-connect');
	grunt.registerTask('default', 'connect');

};
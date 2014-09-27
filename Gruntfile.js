
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),


    emberhandlebars: {
      compile: {
        options: {
          templateName: function(sourcefile){
            console.log(sourcefile)
            var newSource = sourcefile.replace('static/templates/', '');
            newSource = newSource.replace('.hbs', '');
            console.log(newSource);
            return newSource;
          }
        },
        files: [
          'static/templates/*.hbs','static/templates/**/*.hbs'
        ],
        dest: 'static/js/templates.js'
      }
    },
      
    watch: {
        options: {
          livereload: 8080,
        },
        emberhandlebars: {
          files: 'static/templates/**/*.hbs',
          tasks: ['emberhandlebars']
        }
      }
    });
 
  grunt.loadNpmTasks('grunt-contrib-watch'); 
  grunt.loadNpmTasks('grunt-ember-template-compiler');
  // Default task(s).
  
  grunt.registerTask('default', ['emberhandlebars', 'watch']);
};

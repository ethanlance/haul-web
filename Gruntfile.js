module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),
        emberhandlebars: {
            compile: {
                options: {
                    templateName: function(sourcefile){
                        var newSource = sourcefile.replace('static/templates/', '');
                        return newSource.replace('.hbs', '');
                    }
                },
                files: ['static/templates/*.hbs','static/templates/**/*.hbs'],
                dest: 'static/js/templates.js'
            }
        },
        watch: {
            options: {
                livereload: 35729,
            },
            emberhandlebars: {
                files: ['static/templates/**/*.hbs', 'static/templats/*.hbs', 'static/css/*.css'],
                tasks: ['emberhandlebars']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-template-compiler');

    grunt.registerTask('default', ['emberhandlebars', 'watch']);
};

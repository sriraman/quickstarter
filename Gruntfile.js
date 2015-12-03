
module.exports	=	function(grunt){

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					'lineNumbers': true,
					'style': 	"compressed"
				},
				files: {
				'css/style.css': 'scss/main.scss'
				}
			}
		},
		coffee: {
			compile: {
				expand: true,
				flatten: true,
				cwd: 'coffee',
				src: ['*.coffee'],
				dest: 'js/',
				ext: '.js'
			}
		},
		watch: {
			coffee: {
				files: ['coffee/*.coffee'],
				tasks: ['coffee'],
				options: {
					spawn: false,
				},
			},
			sass: {
				files: ['scss/*.scss','scss/**/*.scss'],
				tasks: ['sass'],
				option: {
					spawn: false
				}
			}
		}
	});

	


	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.loadNpmTasks('grunt-contrib-coffee');

	grunt.loadNpmTasks('grunt-contrib-watch');


}
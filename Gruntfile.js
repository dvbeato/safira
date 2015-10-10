module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js',
                    'src/**/*.js',
                    '!src/safira-templates.js',
                    'test/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jscs: {
            src: ['<%= jshint.files %>'],
            options: {
                config: '.jscsrc'
            }
        },
        uglify: {
            main: {
                files: {
                    'dist/safira.min.js': 'dist/safira.js'
                }
            }
        },
        browserify: {
            'dist/safira.js': 'src/safira-module.js'
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['lint']
        },
        html2js: {
            options: {
                base: 'src/directives',
                module: 'safira-templates',
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            main: {
                src: ['src/directives/templates/**/*.html'],
                dest: 'src/safira-templates.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('build', ['browserify', 'uglify:main']);
    grunt.registerTask('lint', ['jshint', 'jscs']);
    grunt.registerTask('server', ['lint', 'watch']);
};

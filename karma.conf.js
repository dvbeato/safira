// Karma configuration
// Generated on Sat Oct 10 2015 10:00:25 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    plugins: [
        'karma-browserify',
        'karma-chai',
        'karma-mocha',
        'karma-coverage',
        'karma-phantomjs-launcher',
        'karma-ng-html2js-preprocessor'
    ],

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'browserify', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*spec.js',
      'src/directives/templates/**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/**/*spec.js': [ 'browserify'],
        'src/**/*.js':['coverage'],
        'src/directives/templates/**/*.html': ['ng-html2js']
    },

    browserify: {
      debug: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    coverageReporter: {
      dir: 'coverage/',
      type : 'lcov'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/directives/',
      moduleName: 'safira-templates'
    }
  })
}

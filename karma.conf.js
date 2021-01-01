// // Karma configuration file, see link for more information
// // https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
     frameworks: [ 'parallel', 'jasmine', '@angular-devkit/build-angular'],

    plugins: [
      require('karma-parallel'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-istanbul-threshold'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-spec-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
       parallelOptions:{
          executors: 1,
          shardStrategy: 'round-robin'
      },
    // preprocessors: {
    //   './src/test.ts': ['@angular-devkit/build-angular']
    // },
    // preprocessors : {
    //   'src/**/*.js': ['coverage']
    // },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    istanbulThresholdReporter: {
      src: './coverage/coverage-final.json',
      reporters: ['text'],
      excludes: [],
      thresholds: {
          global: {
            statements: 98,
            branches: 80,
            functions: 97,
            lines: 98
          },
          each: {
            statements: 98,
            branches: 80,
            functions: 97,
            lines: 98
          }
      }
  },
    // coverageIstanbulReporter: {
    //   dir: require('path').join(__dirname, './coverage/FrontEnd'),
    //   reports: ['html', 'lcovonly', 'text-summary'],
    //   fixWebpackSourcePaths: true
    // },
    // reporters: ['progress', 'kjhtml'],
    specReporter: {
      maxLogLines: 9999,
      suppressErrorSummary: false,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false
  },
  reporters: ['progress', 'kjhtml', 'istanbul-threshold', 'spec'],
    coverageReporter : {
      type : 'text',
      dir : 'coverage/',
      file : 'coverage.txt'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    chromeOptions: {
      args: ['--headless', '--no-sandbox']
    },
    singleRun: false,
    restartOnFileChange: true
  });
};



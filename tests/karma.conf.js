// Karma configuration
// Generated on Wed May 18 2016 16:40:52 GMT-0600 (MDT)
module.exports = function(config) {
  config.set({
    basePath: "",
    frameworks: [
      "jasmine"
    ],
    reporters: [
      "spec"
    ],
    browsers: ['PhantomJS'],
    coverageReporter: {
      "type": "html",
      "dir": "../coverage"
    },
    junitReporter: {
      "outputDir": "../testResultsReport",
      "outputFile": "test-results.xml",
      "suite": "norrisApp_tests",
      "useBrowserName": true
    },
    files: [
      "../www/lib/ionic/js/ionic.bundle.js",
      //"../www/lib/angular/angular.js",
      "../www/lib/angular-mocks/angular-mocks.js",
      "../www/lib/angular-animate/angular-animate.js",
      "../www/lib/angular-route/angular-route.js",
      "../www/lib/angular-sanitize/angular-sanitize.js",
      "../www/lib/angular-ui-router/release/angular-ui-router.js",
      "../www/app/*.module.js",
      "../www/app/**/*.module.js",
      "../www/app/**/*.controller.js",
      "../www/app/**/*.service.js",
      "../www/app/**/*.directive.js",
      "../www/app/*.route.js",
      "../www/app/**/*.js",
      "../tests/**/*.js"
    ],
    exclude: ["../tests/*.js"],
    port: 9876,
    colors: true,
    logLevel: "INFO",
    autoWatch: true,
    singleRun: true,
    concurrency: null,
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "../www/app/**/*.js": ["coverage"]
    }
});
};

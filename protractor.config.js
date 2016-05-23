exports.config = {
  framework: 'jasmine',
  capabilities: {
    'browserName': 'chrome'
  },
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['www/app/joke/joke.spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true
  },
  allScriptsTimeout: 20000,
  onPrepare: function(){
    browser.driver.get('http://localhost:8100/#/tab/randJoke');
  }
}


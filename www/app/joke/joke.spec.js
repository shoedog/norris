var JokePage = require('./joke.page.js');

describe('Main Page', function(){
  var page;
  beforeEach(function () {
    page = new JokePage();
  });

  it('should be able to click the Get Joke button', function(){
    expect(page.btnGetJoke.getAttribute('disabled')).toBe(null);
  });
  /*
  it('should be able to click the Fav Joke Icon', function(){
    var button = element(by.id('btnFaveJoke'));
    expect(button.getAttribute('disabled')).toBe(null);
  });
  */
  it('should have a joke', function() {
    //var joke = element(by.exactBinding('joke.joke'));
    //element(by.id('btnGetJoke')).click();
    //expect(element(by.binding('jokeDisplay')).isPresent()).toBe(true);
    expect(page.joke.isPresent()).toBe(true);
  });
});

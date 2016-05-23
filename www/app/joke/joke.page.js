var JokePage = function() {
  browser.get('http://localhost:8100/#/tab/randJoke');
};

JokePage.prototype = Object.create({}, {
  btnGetJoke: { get: function () { return element(by.id('btnGetJoke')); }},
  //btnFavJoke: { get: function () { return element(by.id('btnFavJoke')); }},
  joke: { get: function () { return element(by.binding('jokeDisplay')); }}
});

module.exports = JokePage;

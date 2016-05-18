(function() {

  angular.module('app.joke')

    .controller('jokeCtrl', jokeController);

  function jokeController(jokeService, jokeNameService) {
    /* jshint validthis: true */
    var self = this;

    self.nameF = jokeNameService.getNameF;
    self.nameL = jokeNameService.getNameL;
    self.joke = "Chuck Norris does not write code, he stares at the computer and the code writes itself.";

    self.getJoke = function () {
      jokeService.GetJoke()
        .then(function (joke) {
          self.joke = joke;
        })
    };
  }
})();

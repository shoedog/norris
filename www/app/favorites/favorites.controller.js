(function() {

  angular.module('app.favorites')

    .controller('faveCtrl', faveCtrl);

  function faveCtrl(jokeService, jokeNameService) {
    /* jshint validthis: true */
    var self = this;
    self.jokes = jokeService.LoadJokes();

    self.removeJoke = function(index) {
      jokeService.RemoveJoke(index);
    }
  }
})();


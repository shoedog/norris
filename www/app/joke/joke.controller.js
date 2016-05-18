(function() {

  angular.module('app.joke')

    .controller('jokeCtrl', jokeController);

  function jokeController(jokeService, jokeNameService) {
    /* jshint validthis: true */
    var self = this;

    self.nameF = jokeNameService.getNameF;
    self.nameL = jokeNameService.getNameL;
    self.joke = "Chuck Norris does not write code, he stares at the computer and the code writes itself.";

    /*self.changeFact = function(){
     self.fact = "Code optimizes itself for Chuck Norris.";
     };*/
    var first = self.nameF();
    var last = self.nameL();
    console.log(first);
    console.log(last);

    self.getJoke = function () {
      jokeService.GetJoke()
        .then(function (joke) {
          self.joke = joke;
        })
    };

    /*
    self.saveJoke = function(joke) {
      jokeService.SaveJoke(joke);
    }
    */
  }
})();

(function() {

  angular.module('app.jokeName')

    .controller('jokeNameCtrl', jokeNameController);

  function jokeNameController(jokeNameService) {
    /* jshint validthis: true */
    /* jshint validthis: true */
    var self = this;
    self.nameF = jokeNameService.getNameF;
    self.nameL = jokeNameService.getNameL;

    self.updateName = function (inNameF, inNameL) {
      jokeNameService.setName(inNameF, inNameL);
    };
  }
})();

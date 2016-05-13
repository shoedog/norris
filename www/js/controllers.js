angular.module('starter.controllers', [])

.controller('factController', function(getFacts, nameService) {
  /* jshint validthis: true */
  var self = this;

  self.nameF = nameService.getNameF;
  self.nameL = nameService.getNameL;
  self.fact = "Chuck Norris doesn't write code, he stares at the computer and the code writes itself.";

  /*self.changeFact = function(){
    self.fact = "Code optimizes itself for Chuck Norris.";
  };*/
  var first = self.nameF();
  var last = self.nameL();
  console.log(first);
  console.log(last);
  self.getFact = function(){
    getFacts.get()
      .then(function(fact) {
        self.fact = fact;
    })
  };
})

.controller('nameCtrl', function(nameService) {
  /* jshint validthis: true */
  var self = this;
  self.nameF = nameService.getNameF;
  self.nameL = nameService.getNameL;

  self.updateName = function(inNameF, inNameL){
    nameService.setName(inNameF, inNameL);
  };
})

.controller('settingsCtrl', function() {
  /* jshint validthis: true */
  var self = this;

  this.master = {};

  this.update = function(user) {
    this.master = angular.copy(user);
  };

  this.reset = function(form) {
    if(form) {
      form.$setPristine();
      form.$setUntouched();
    }
    //$scope.user = angular.copy($scope.master);
  };

  this.reset;
});

/*
angular.module('starter').service('getFacts', function ($http) {
    var ICNDB = 'http://api.icndb.com/jokes/random?exclude=[explicit]';
   this.get = function() {
     return $http.get(ICNDB)
       .then(function(res) {
         //console.log(res);
         //console.log(res.data.value.joke);
         return res.data.value.joke;
       })

   }
});
*/
/*
angular.module('starter').controller('newFactCtrl', function(newFact) {
  var self = this;
  self.newFact = "Chuck Norris doesn't write code, he stares at the computer and the code writes itself."
  self.changeFact = function(newFact){
    fact = newFact;
    return newFact;
  };
});
*/

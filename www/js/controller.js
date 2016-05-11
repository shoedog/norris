angular.module('starter').controller('factController', function(getFacts) {
  var self = this;

  self.fact = "Chuck Norris doesn't write code, he stares at the computer and the code writes itself.";

  /*self.changeFact = function(){
    self.fact = "Code optimizes itself for Chuck Norris.";
  };*/

  self.getFact = function(){
    getFacts.get()
      .then(function(fact) {
        self.fact = fact;
    })
  };
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

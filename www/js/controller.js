angular.module('controller'), ['app'])

.controller('factController', ['factAdder', function(factAdder) {
  this.fact = "Jet fuel cannot melt Chuck Norris.";
  this.newFact;
}]);

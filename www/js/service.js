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

angular.module('starter.service', [])

.service('getFacts', function ($http) {
  var ICNDB = 'http://api.icndb.com/jokes/random?exclude=[explicit]&amp;escape=javascript';
  //var ICNDB = 'http://api.icndb.com/jokes/239?escape=javascript';
  this.get = function() {
    return $http.get(ICNDB)
      .then(function(res) {
        //console.log(res);
        //console.log(res.data.value.joke);
        return res.data.value.joke;
      })
  }
});




/*
 http://api.icndb.com/jokes/random?exclude=[explicit]&amp;firstName=John&amp;lastName=Doe&amp;escape=javascript
 */

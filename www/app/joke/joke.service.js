(function() {

  angular.module('app.joke')

    .service('jokeService', jokeService );

  function jokeService($http, jokeNameService) {
    var jokes = [{
        id: '',
        joke: ''
    }];

    return {
      SaveJoke: function (newJoke) {
      jokes.push(newJoke);
    },
      LoadJoke: function (index) {
      return jokes;
    },
      GetJoke: function () {
      nameF = jokeNameService.getNameF();
      nameL = jokeNameService.getNameL();
      var ICNDB = 'http://api.icndb.com/jokes/random?firstName='
        + nameF
        + '&lastName='
        + nameL
        + '&exclude=[explicit]&escape=javascript';
      console.log(ICNDB);
      return $http.get(ICNDB)
        .then(function (res) {
          //console.log(res);
          //console.log(res.data.value.joke);
          return res.data.value.joke;
        })
      }
    }
  }
})();
/*
    this.get = function() {
      nameF = jokeNameService.getNameF();
      nameL = jokeNameService.getNameL();
      var ICNDB = 'http://api.icndb.com/jokes/random?firstName='
        + nameF
        + '&lastName='
        + nameL
        + '&exclude=[explicit]&escape=javascript';
      console.log(ICNDB);
      return $http.get(ICNDB)
        .then(function (res) {
          //console.log(res);
          //console.log(res.data.value.joke);
          return res.data.value.joke;
        })
    }*/



//var ICNDB = 'http://api.icndb.com/jokes/239?escape=javascript';
/*
 return{
 get : function(){
 var ICNDB = 'http://api.icndb.com/jokes/random?firstName='
 + nameF + '&lastName=' + nameL + '&exclude=[explicit]&escape=javascript';
 console.log(ICNDB);
 return $http.get(ICNDB)
 .then(function(res) {
 //console.log(res);
 //console.log(res.data.value.joke);
 return res.data.value.joke;
 })
 }
 }*/

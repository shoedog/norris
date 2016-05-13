angular.module('starter.services', [])

.service('getFacts', function ($http, nameService) {

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

  this.get = function() {
    nameF = nameService.getNameF();
    nameL = nameService.getNameL();
    var ICNDB = 'http://api.icndb.com/jokes/random?firstName='
      + nameF + '&lastName=' + nameL + '&exclude=[explicit]&escape=javascript';
    console.log(ICNDB);
    return $http.get(ICNDB)
      .then(function (res) {
        //console.log(res);
        //console.log(res.data.value.joke);
        return res.data.value.joke;
      })
  }
})


.service('nameService', function() {
  var fname = "Chuck";
  var lname = "Norris"

  return{
    getNameF: function(){
      return fname;
    },
    getNameL: function(){
      return lname;
    },
    setName: function(newFName, newLName){
      fname = newFName;
      lname = newLName;
    }
  }
});




/*
 http://api.icndb.com/jokes/random?exclude=[explicit]&amp;firstName=John&amp;lastName=Doe&amp;escape=javascript
 */

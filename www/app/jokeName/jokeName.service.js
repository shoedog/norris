(function() {

  angular.module('app.jokeName')

    .service('jokeNameService', jokeNameService);

  function jokeNameService() {
    var fname = "Chuck";
    var lname = "Norris"

    return {
      getNameF: function () {
        return fname;
      },
      getNameL: function () {
        return lname;
      },
      setName: function (newFName, newLName) {
        fname = newFName;
        lname = newLName;
      }
    }
  }
})();

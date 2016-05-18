(function(){
  angular.module('app.widgets')
    .controller('favIconCtrl', FavIconController);

  function FavIconController(jokeService){
    var vm = this;

    vm.toggleFav = toggleFav;
    vm.setToggle = setToggle;
    vm.faveJoke = faveJoke;
    vm.unFaveJoke = unFaveJoke;

    function toggleFav(){
        if( vm.favedIcon == false ){
          faveJoke();
        } else {
          unFaveJoke();
        }
        vm.favedIcon = !vm.favedIcon;
        vm.unFavedIcon = !vm.unFavedIcon;
    };

    function setToggle(){
      vm.jokes = jokeService.LoadJokes();
      var isJokeFaved = false;

      for( vm.jokes.joke in vm.jokes ){
        if( vm.jokeDisplay == vm.jokes.joke ){
          isJokeFaved = true;
        }
      }

      if( isJokeFaved == false ){
        vm.favedIcon = false;
        vm.unFavedIcon = true;
      } else if( isJokeFaved == true) {
        vm.favedIcon = true;
        vm.unFavedIcon = false;
      }
    };

    function faveJoke(){
      jokeService.SaveJoke(vm.jokeDisplay);
    }

    function unFaveJoke(){
      jokeService.RemoveJoke(vm.jokeDisplay);
    }

    setToggle();

  }
})();

/*
link: function(scope, element, attributes ){
  scope.Faved = true;
  scope.UnFaved = false;

  scope.showHide = function(){
    scope.Faved = !scope.Faved;
    scope.UnFaved = !scope.UnFaved;

  };

  //console.log( attributes.jokeDisplay);

  //var joke = scope.joke.joke;
  //console.log("Joke in Dir:" + joke);
  attributes.$observe( 'jokeDisplay', function(value) {
    //console.log("Value: " + value);
    //console.log("watch call");
    scope.Faved=true;
    scope.UnFaved=false;
  });
*/

/*
 attributes.$observe( 'jokeDisplay', function(value) {
 //console.log("Value: " + value);
 //console.log("watch call");
 vm.favedIcon=true;
 vm.unFavedIcon=false;
 });
 */

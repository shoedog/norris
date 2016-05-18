(function(){
  angular.module('app.widgets')
    .controller('favIconCtrl', FavIconController);

  FavIconController.$inject = ['jokeService', '$scope'];

  function FavIconController(jokeService, $scope){
    var vm = this;

    vm.toggleFav = toggleFav;
    vm.setToggle = setToggle;
    vm.faveJoke = faveJoke;
    vm.unFaveJoke = unFaveJoke;
    //vm.watchJoke = watchJoke;

    function faveJoke(){
      jokeService.SaveJoke(vm.jokeDisplay);
    };

    function unFaveJoke(){
      var id = jokeService.GetJokeIndex(vm.jokeDisplay);
      jokeService.RemoveJoke(id);
    };

    function toggleFav(){
      //console.log('toggle');
        if( vm.favedIcon == false ){
          faveJoke();
        } else {
          unFaveJoke();
        }
        vm.favedIcon = !vm.favedIcon;
        vm.unFavedIcon = !vm.unFavedIcon;
    };

    function watchJoke(){
      $scope.$watch('vm.jokeDisplay', function(newValue, oldValue){
        //console.log('observed');
        setToggle();
      });
    };

    function setToggle(){
      var isJokeFaved = jokeService.GetJokeIndex(vm.jokeDisplay);

      if( isJokeFaved < 0 || isJokeFaved == undefined ){
        vm.favedIcon = false;
        vm.unFavedIcon = true;
      } else if( isJokeFaved >= 0 ) {
        vm.favedIcon = true;
        vm.unFavedIcon = false;
      }
    };

    watchJoke();
    //setToggle();
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

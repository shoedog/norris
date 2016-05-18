(function() {

  angular.module('app.widgets')
    .directive('faveIcon', ['$document', faveIconDirective]);

  function faveIconDirective() {
    return {
      restrict: 'A',
      scope: {},
      bindToController: {
        jokeDisplay: '=',
      },
      controller: 'favIconCtrl',
      controllerAs: 'vm',
      templateUrl: 'app/widgets/favIcon/favIcon.html',
      /*link: function (scope, element, attributes, controller) {
        attributes.$observe( 'jokeDisplay', function(value) {
          //console.log("Value: " + value);
          //console.log("watch call");
          favedIcon=false;
          unFavedIcon=true;
        });
      }*/
      }
  }
})();

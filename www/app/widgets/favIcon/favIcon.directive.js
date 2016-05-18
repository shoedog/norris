(function() {

  angular.module('app.widgets')
    .directive('faveIcon', ['$document', faveIconDirective]);

  function faveIconDirective() {
    return {
      restrict: 'A',
      scope: {
        //unFavedIcon: '=',
        //favedIcon: '=',
        jokeDisplay: '='
      },
      controller: 'favIconCtrl',
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'app/widgets/favIcon/favIcon.html'
      }
  }
})();

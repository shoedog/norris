(function() {

  angular.module('app.widgets')
    .directive('faveIcon', faveIconDirective);

  function faveIconDirective(jokeService) {
    return {
      restrict: 'A',
      templateUrl: 'app/widgets/favIcon/favIcon.html',
      replace: false,
      scope: true,
    };
  }

})();

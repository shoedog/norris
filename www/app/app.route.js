
(function() {
  angular
    .module('app')
    .config(configureRoutes);

  configureRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configureRoutes($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router
    // https://github.com/angular-ui/ui-router
    $stateProvider

    //SetUp Tabs Abstract for tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      .state('tab.jokeName', {
        url: '/jokeName',
        views: {
          'tab-jokeName': {
            templateUrl: 'app/jokeName/jokeNameView.html',
            controller: 'jokeNameCtrl as jokeName'
          }
        }
      })
      .state('tab.favorites', {
        url: '/favorites',
        views: {
          'tab-favorites': {
            templateUrl: 'app/favorites/favoritesView.html',
            controller: 'faveCtrl as fave'
          }
        }
      })
      .state('tab.randJoke', {
        url: '/randJoke',
        views: {
          'tab-randJoke': {
            templateUrl: 'app/joke/jokeView.html',
            controller: 'jokeCtrl as joke'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/randJoke');
  }
})();


// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var norrisJokeApp = angular.module('starter', ['ionic','starter.controller', 'starter.service']);

norrisJokeApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
});

norrisJokeApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    //SetUp Tabs Abstract for tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.changeName', {
      url: '/changeName',
      views: {
        'changeName': {
          templateUrl: 'templates/changeName.html',
          controller: 'changeNameCtrl'
        }
      }
  })
    .state('tab.randFact', {
      url: '/randFact',
      views: {
        'randFact': {
          templateUrl: 'templates/randFact.html',
          controller: 'factController',
          controllerAs: 'facts'
        }
      }
  });

  $urlRouterProvider.otherwise('/randFact');
});


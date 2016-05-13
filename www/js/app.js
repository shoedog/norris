// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        // Don't remove this line unless you know what you are doing. It stops the viewport from snapping when
        // text inputs are focused. Ionic handles this internally for a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router
  // https://github.com/angular-ui/ui-router
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
        'tab-changeName': {
          templateUrl: 'templates/changeName.html',
          controller: 'nameCtrl as Name',
        }
      }
  })
    .state('tab.settings', {
      url: '/settings',
      views: {
        'tab-settings': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl as settings',
        }
      }
    })
    .state('tab.randFact', {
      url: '/randFact',
      views: {
        'tab-randFact': {
          templateUrl: 'templates/randFact.html',
          controller: 'factController as Facts',
        }
      }
  });

  $urlRouterProvider.otherwise('/tab/randFact');
});


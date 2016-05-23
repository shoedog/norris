(function() {

  angular.module('app.joke')

    .controller('jokeCtrl', jokeController);

  function jokeController(jokeService, jokeNameService, $ionicActionSheet, $ionicModal, $timeout, $ionicBackdrop) {
    /* jshint validthis: true */
    var self = this;

    self.nameF = jokeNameService.getNameF;
    self.nameL = jokeNameService.getNameL;
    self.joke = "Chuck Norris does not write code, he stares at the computer and the code writes itself.";

    self.getJoke = function () {
      jokeService.GetJoke()
        .then(function (joke) {
          self.joke = joke;
        })
    };

    self.showAct = function() {
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b>' },
          { text: 'Save'}
        ],
        destructiveText: 'Delete',
        titleText: 'Actions',
        cancelText: 'Cancel',
        cancel: function () {
          hideSheet();
        },
        buttonClicked: function(index) {
          return true;
        }
      });

      $timeout(function() {
        hideSheet();
      }, 5000);
    };

    self.showBackDrop = function() {
      $ionicBackdrop.retain();
      $timeout(function() {
        $ionicBackdrop.release();
      }, 2000);
    };

    //self.$on('backdrop.hidden', function() {
      //execute action
    //});
  }
})();

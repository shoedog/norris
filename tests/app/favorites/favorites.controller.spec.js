describe("favorites.controller.js", function() {
  //Referenced for setup: https://gist.github.com/blesh/8846528
  beforeEach(module('app.favorites'));
  var ctrl;

  //var jokeServiceMock, jokeNameServiceMock;

  beforeEach(inject(function ($controller) {
    ctrl = $controller('faveCtrl', {});
  }));

  //jokeServiceMock = jasmine.createSpyObj('jokeService', ['someJokeCall']);
  //jokeNameServiceMock = jasmine.createSpyObj('jokeNameService', ['someNameCall']);

  describe('jokes', function () {
    it('should initially be empty of jokes', function () {
    });
    it('if a joke is added, it should show up', function () {
    });
  });
  describe('removeJoke(index)', function () {
    it('should call service.RemoveJoke()', function () {
    });
    it('the joke at the specified index should be removed', function () {
    });
  });
});

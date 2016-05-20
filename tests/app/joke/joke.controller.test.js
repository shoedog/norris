describe("joke.controller.js", function() {
  //Referenced for setup: https://gist.github.com/blesh/8846528
  beforeEach(module('app.joke'));
  var ctrl;

  //var jokeServiceMock, jokeNameServiceMock;

  beforeEach( inject(function ( $controller) {
    ctrl = $controller('jokeCtrl', {
    });
  }));

    //jokeServiceMock = jasmine.createSpyObj('jokeService', ['someJokeCall']);
    //jokeNameServiceMock = jasmine.createSpyObj('jokeNameService', ['someNameCall']);

  describe('joke', function() {
    it('should create a joke and start with joke populated', function() {
      expect(ctrl).toBeDefined();
      expect(ctrl.joke).toBeDefined();
      expect(ctrl.joke).toEqual('Chuck Norris does not write code, he stares at the computer and the code writes itself.');
    });
    it('should first and last name variables and populated them', function() {
      expect(ctrl.nameF).toBeDefined();
      expect(ctrl.nameL).toBeDefined();
      //expect(ctrl.nameF).toEqual('Chuck');
    });
  });
});


describe("jokeName.controller.js", function() {
  //Referenced for setup: https://gist.github.com/blesh/8846528
  beforeEach(module('app.jokeName'));
  var ctrl;

  //var jokeServiceMock, jokeNameServiceMock;

  beforeEach(inject(function ($controller) {
    ctrl = $controller('jokeNameCtrl', {});
  }));

  //jokeServiceMock = jasmine.createSpyObj('jokeService', ['someJokeCall']);
  //jokeNameServiceMock = jasmine.createSpyObj('jokeNameService', ['someNameCall']);

  describe('nameF(), nameL()', function () {
    it('should create functions to get first and last name variables', function () {
      expect(ctrl.nameF).toBeDefined();
      expect(ctrl.nameL).toBeDefined();
    });
    it('first and last name functions should initially receive Chuck and Norris', function () {
      expect(ctrl.nameF()).toBe('Chuck');
      expect(ctrl.nameL()).toBe('Norris');
    });
  });
  describe('updateName()', function () {
    it('should recieve a first and last name', function () {
      //expect(ctrl.updateName).toBeDefined();
    });
    it('should update nameF and nameL to the variables passed', function () {
    });
    it('should call jokeNameService.setName() to change the name variables', function () {
    });
  });

});

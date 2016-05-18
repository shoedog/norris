describe("jokeController", function() {
  beforeEach(module('app'));

  var controller, scope, jokeNameService, jokeService;

  beforeEach(inject(function( $rootscope, $controller, _jokeNameService_, _jokeService_ ){
    jokeNameService = _jokeNameService_;
    jokeService = _jokeService_;
    scope = $rootScope.$new();
    controller = $controller('jokeCtrl', {
      $scope: scope,
      jokeNameService: jokeNameService,
      jokeService: jokeService
    });
  }));

  describe('initialization', function() {
    it('initializes with proper $scope variables and methods', function() {
      scope.$apply();
      expect(scope.joke).toEqual('Chuck Norris does not write code, he stares at the computer and the code writes itself.');
    });
  });

  describe('getNameF', function() {
    it('should get a first name', function() {
      //Mock jokeNameService
      spyOn(jokeNameService, 'getNameF').and.callFake(function() {
        var name = 'test';
        return name;
      })
      $scope.apply(function() {
        scope.jokeNameService.getNameF();
      });
      expect(jokeNameService.getNameF).toHaveBeenCalled();
      expect(scope.nameF).toBe(name);
    });
  });

  describe('getNameL', function() {
    it('should get a last name', function() {
      //Mock jokeNameService
      spyOn(jokeNameService, 'getNameL').and.callFake(function() {
        var name = 'test';
        return name;
      })
      $scope.apply(function() {
        scope.jokeNameService.getNameL();
      });
      expect(jokeNameService.getNameL).toHaveBeenCalled();
      expect(scope.nameL).toBe(name);
    });
  });

  describe('getJoke', function() {
    it('should get a joke', function() {
      //Mock jokeService
      spyOn(jokeService, 'GetJoke').and.callFake(function() {

      });
      $scope.apply(function() {
        scope.getJoke();
      });
      expect(jokeService.GetJoke).toHaveBeenCalled();
      //expect(scope.nameL).toBe(name);
    });
  });

});

describe("joke.controller.js", function() {
  beforeEach(module('app.joke'));
  var ctrl;


  beforeEach(inject(function ($controller) {
    ctrl = $controller('jokeCtrl', {
    });
  }));

  describe('joke', function () {
    it('should create a joke var and start with joke initialized', function () {
      expect(ctrl).toBeDefined();
      expect(ctrl.joke).toBeDefined();
      expect(ctrl.joke).toEqual('Chuck Norris does not write code, he stares at the computer and the code writes itself.');
    });
  });
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
/*
  var mockJokeService;
  beforeEach(function(){
    module(function($provide){
      $provide.service('jokeService', function(){
        this.getJoke = jasmine.createSpy('getJoke');
      })
    });
    module('services');
  });

  beforeEach(inject(function(jokeService){
    mockJokeService = jokeService;
  }));
*/

  describe('getJoke()', function () {
    it('should be called', function () {
      //expect(ctrl.getJoke().toEqual("New Joke"));
     //expect(ctrl.getJoke).toHaveBeenCalled();
    });
    it('should call joke.Service to get a new joke', function() {

    });
    it('joke should equal the returned joke', function() {

    });
  });
});


'use strict';

describe('Controller: StoryboardCtrl', function () {

  // load the controller's module
  beforeEach(module('angelloApp'));

  var StoryboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StoryboardCtrl = $controller('StoryboardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

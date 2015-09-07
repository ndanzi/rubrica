'use strict';

describe('Controller: ContattoCtrl', function () {

  // load the controller's module
  beforeEach(module('rubricaApp'));

  var ContattoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContattoCtrl = $controller('ContattoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContattoCtrl.awesomeThings.length).toBe(3);
  });
});

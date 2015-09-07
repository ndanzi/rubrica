'use strict';

describe('Controller: ContattiAdministratorCtrl', function () {

  // load the controller's module
  beforeEach(module('rubricaApp'));

  var ContattiAdministratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContattiAdministratorCtrl = $controller('ContattiAdministratorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContattiAdministratorCtrl.awesomeThings.length).toBe(3);
  });
});

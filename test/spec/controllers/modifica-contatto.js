'use strict';

describe('Controller: ModificaContattoCtrl', function () {

  // load the controller's module
  beforeEach(module('rubricaApp'));

  var ModificaContattoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModificaContattoCtrl = $controller('ModificaContattoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModificaContattoCtrl.awesomeThings.length).toBe(3);
  });
});

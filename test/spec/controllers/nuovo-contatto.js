'use strict';

describe('Controller: NuovoContattoCtrl', function () {

  // load the controller's module
  beforeEach(module('rubricaApp'));

  var NuovoContattoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuovoContattoCtrl = $controller('NuovoContattoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuovoContattoCtrl.awesomeThings.length).toBe(3);
  });
});

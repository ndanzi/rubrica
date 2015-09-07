'use strict';

describe('Service: contatti', function () {

  // load the service's module
  beforeEach(module('rubricaApp'));

  // instantiate service
  var contatti;
  beforeEach(inject(function (_contatti_) {
    contatti = _contatti_;
  }));

  it('should do something', function () {
    expect(!!contatti).toBe(true);
  });

});

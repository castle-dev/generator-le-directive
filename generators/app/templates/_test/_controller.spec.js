/* jshint undef:false*/
(function() {
  'use strict';
  describe('common.controllers.<%= controllerName %> module', function() {
    var controller;
    beforeEach(module('common.controllers.<%= controllerName %>'));
    beforeEach(inject(function($controller, $rootScope) {
      var scope = $rootScope.$new();
      controller = $controller('<%= controllerName %>', {$scope: scope});
    }));

    describe('<%= controllerName %>', function () {
      it('should exist', function () {
        expect(controller).toBeDefined();
      });
    });
  });
})();

/* jshint undef:false*/
(function() {
  'use strict';
  describe('common.controllers.LeCollectionDirectiveController module', function() {
    var controller;
    beforeEach(module('common.controllers.LeCollectionDirectiveController'));
    beforeEach(inject(function($controller) {
      controller = $controller('LeCollectionDirectiveController', {});
    }));

    describe('LeCollectionDirectiveController', function () {
      it('should exist', function () {
        expect(controller).toBeDefined();
      });
    });
  });
})();

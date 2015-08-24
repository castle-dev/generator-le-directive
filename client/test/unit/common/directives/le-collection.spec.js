/* jshint undef:false*/
(function() {
  'use strict';
  describe('common.directives.leCollection  module', function() {
    var element, scope;
    beforeEach(module('common.directives.leCollection', function ($controllerProvider) {
      var mockController = function () {};
      $controllerProvider.register('LeCollectionDirectiveController', mockController);
    }));
    beforeEach(module('templates'));
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      element = '<le-collection></le-collection>';
      element = $compile(element)(scope);
      scope.$digest();
    }));

    describe('le-collection directive', function() {
      it('should have an isolate scope', function() {
        var isolateScope = element.isolateScope();
        expect(isolateScope).toBeDefined();
      });
    });
  });
})();

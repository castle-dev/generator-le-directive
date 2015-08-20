/* jshint undef:false*/
(function() {
  'use strict';
  describe('common.directives.<%= camelCaseDirectiveName %>  module', function() {
    var element, scope;
    beforeEach(module('common.directives.<%= camelCaseDirectiveName %>', function ($controllerProvider) {
      var mockController = function () {};
      $controllerProvider.register('<%= controllerName %>', mockController);
    }));
    beforeEach(module('templates'));
    beforeEach(inject(function($rootScope, $compile) {
      scope = $rootScope.$new();
      element = '<<%= paramCaseDirectiveName %>></<%= paramCaseDirectiveName %>>';
      element = $compile(element)(scope);
      scope.$digest();
    }));

    describe('<%= paramCaseDirectiveName %> directive', function() {
      it('should have an isolate scope', function() {
        var isolateScope = element.isolateScope();
        expect(isolateScope).toBeDefined();
      });
    });
  });
})();

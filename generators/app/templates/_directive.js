(function() {
  'use strict';

  function <%= camelCaseDirectiveName %> (lazyLoadService) {
    return {
      restrict: 'E',
      templateUrl: lazyLoadService.getComponentTemplateFileName('<%= paramCaseDirectiveName  %>'),
      controller: '<%= controllerName %>',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
      },
    };
  }

  angular.module('common.directives.<%= camelCaseDirectiveName %>', [
    'common.services.lazyLoad'
  ])
    .directive('<%= camelCaseDirectiveName %>', <%= camelCaseDirectiveName %>);
})();

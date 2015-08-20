(function() {
  'use strict';

  function <%= camelCaseDirectiveName %> () {
    return {
      restrict: 'E',
      templateUrl: 'src/common/partials/<%= paramCaseDirectiveName %>.tpl.html',
      controller: '<%= controllerName %>',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
      },
    };
  }

  angular.module('common.directives.<%= camelCaseDirectiveName %>', [])
    .directive('<%= camelCaseDirectiveName %>', <%= camelCaseDirectiveName %>);
})();

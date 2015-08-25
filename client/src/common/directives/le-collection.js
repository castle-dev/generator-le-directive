(function() {
  'use strict';

  function leCollection () {
    return {
      restrict: 'E',
      templateUrl: 'src/common/partials/le-collection.tpl.html',
      controller: 'LeCollectionDirectiveController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {
      },
    };
  }

  angular.module('common.directives.leCollection', [])
    .directive('leCollection', leCollection);
})();

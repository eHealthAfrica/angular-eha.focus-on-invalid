;(function() {
  'use strict';
  /**
   * @ngdoc directive
   * @name ehaFocusOnInvalid
   * @module eha.focus-on-invalid
   */
  var ngModule = angular
                  .module('eha.focus-on-invalid.directive', []);

  ngModule.directive('ehaFocusOnInvalid', function() {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        element.on('submit', function() {
          var firstInvalid = element[0].querySelector('.ng-invalid');
          if (firstInvalid) {
            firstInvalid.focus();
          }
        });
      }
    };
  });

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();

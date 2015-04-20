;(function() {

  var ngModule = angular.module('eha.focus-on-invalid', [
    'eha.focus-on-invalid.directive'
  ]);

  // Check for and export to commonjs environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ngModule;
  }

})();

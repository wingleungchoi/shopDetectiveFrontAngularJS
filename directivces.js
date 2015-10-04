// Directive
shopDetectiveApp.directive('companyProfile', function(){
  return{
    restrict: 'E',
    templateUrl: 'directives/companyProfile.html'
    replace: true, // replace is depreciated in later versions of AngularJS
    scope: {} // '=', '&', '@'
  }
});
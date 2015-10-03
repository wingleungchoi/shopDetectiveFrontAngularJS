// Directive
weatherApp.directive('weatherReport', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherReport.html',
    replace: true,
    scope: {
      weatherDay: '=',
      convertToStandard: '&',
      convertToDate: "&",
      dateFormat: "@"
    }
  };
});

shopDetectiveApp.directive('companyProfile', function(){
  return{
    restrict: 'E',
    
  }
});
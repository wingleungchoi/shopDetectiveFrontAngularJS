// Controllers
shopDetectiveApp.controller('homeController',['$scope', '$location', 'companyService',
function($scope, $location, companyService){
  $scope.keyword           = companyService.keyword;
  $scope.keywordType       = companyService.keywordType;
  $scope.numberOfCompanies = companyService.numberOfCompanies;

  $scope.$watch('keyword', function(){
    companyService.keyword = $scope.keyword;
  });

  $scope.$watch('keywordType', function(){
    companyService.keywordType = $scope.keyword;
  });

  $scope.$watch('numberOfCompanies', function(){
    companyService.numberOfCompanies = $scope.numberOfCompanies;
  });
  
  $scope.submit = function(){
    $location.path('/searchResult');
  };
  
}]);

shopDetectiveApp.controller('searchResultController', ['$scope', '$location', 'companyService', 'companyQueryService',
function($scope, $location, companyService, companyQueryService) {
  $scope.keyword              = companyService.keyword;
  $scope.keywordType          = companyService.keywordType;
  $scope.companyQueryResult   = companyQueryService.getCompanies(keyword, keywordType, 10);
}
]);

/*

weatherApp.controller('forecastController',['$scope', '$routeParams', 'cityService', 'weatherService', 
function($scope, $routeParams, cityService, weatherService){
  $scope.city = cityService.city;
  $scope.days = $routeParams.days || 2; 
  $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
  $scope.convertToFahrenheit = function(degK){
    return Math.round((1.8 * (degK - 273)) + 32);
  };
  $scope.convertToDate = function(dt){
    return new Date(dt * 1000);
  };
  console.log($scope.weatherResult);
}]);
*/
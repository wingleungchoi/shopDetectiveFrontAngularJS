// Controllers
shopDetectiveApp.controller('homeController',['$scope', '$location', 'companyQueryService', 'companyService',
function($scope, $location, companyQueryService, companyService){
  $scope.keyword           = companyService.keyword;
  $scope.keywordType       = companyService.keywordType;
  $scope.numberOfCompanies = companyService.numberOfCompanies;
  
  $scope.submit = function(){
    $location.path('/searchResult');
  };
  
}]);

/*
weatherApp.controller('homeController',['$scope', '$location', 'cityService',
function($scope, $location, cityService){
  $scope.city = cityService.city;

  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  });

  $scope.submit = function() {
    $location.path('/forecast');
  };
}]);

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
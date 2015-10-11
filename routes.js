// Routes
shopDetectiveApp.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })

  .when('/search', {
    templateUrl: 'pages/search-result.hmtl',
    controller: 'searchResultController'
  })

});
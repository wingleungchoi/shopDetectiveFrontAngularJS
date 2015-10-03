// Routes
weatherApp.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })

  .when('/companies', {
    templateUrl: 'pages/companies.html',
    controller: 'companyController'
  })

  .when('/companies/state', {
    templateUrl: 'pages/companies.html',
    controller: 'companyController'
  })
  .when('/companies/country',{
    templateUrl: 'pages/companies.html',
    controller: 'companyController'
  })
});
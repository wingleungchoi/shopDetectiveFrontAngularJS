//Services
shopDetectiveApp.service("companyQueryService", ['$resource', function($resource){
  this.getCompanies = function(keyword, type, numberOfCity){
    var companyQueryAPI = $resource("http://localhost:4567/yelp/search.json",
      {callback: "JSON_CALLBACK"}, {post: {method: "JSONP"}}
    );

    return companyQueryAPI.post(
      {
        keyword: keyword,
        type: type,
        companies_total: numberOfCity
      }
    );
  };
}]);

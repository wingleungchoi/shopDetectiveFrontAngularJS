//Services
shopDetectiveApp.service("companyQueryService", ['$resource', function($resource){
  this.getCompanies = function(keyword, keywordType, numberOfCity){
    var companyQueryAPI = $resource("http://localhost:4567/yelp/search.json",
      {callback: "JSON_CALLBACK"}, {post: {method: "JSONP"}}
    );

    return companyQueryAPI.post(
      {
        keyword: keyword,
        type: keywordType,
        companies_total: numberOfCompanies
      }
    );
  };
}]);

shopDetectiveApp.service("companyService", function(){
  this.keyword = "New York";
  this.keywordType = "state";
  this.numberOfCompanies = "10";
});

/*
weatherApp.service("cityService", function(){
  this.city = "New York, NY";
});
*/
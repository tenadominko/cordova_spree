angular.module("spree").controller("ProductListCtrl", 
  [ "$scope", "$http", "$rootScope",
  function($scope, $http, $rootScope) {
    $http({
      method: "JSONP",
      url: $rootScope.URL + "/api/products",
      params: {"callback": "JSON_CALLBACK",
              "token": "89af628f481fa249cbec9ab2c20a93312ca80e95fd4247b3"}
        }).success(function(data, status, headers, config) {
        $scope.products = data.products;
      }).error(function(data, status, headers, config) {
        window.alert("ERROR");
    }); 

  }]
);
angular.module("spree").controller("ProductDetailCtrl", 
  function($scope, $http, $routeParams, $rootScope) {
    $http({
      method: "JSONP",
      url: $rootScope.URL + "/api/products/" + $routeParams.productId,
      params: {"callback": "JSON_CALLBACK",
              "token": "89af628f481fa249cbec9ab2c20a93312ca80e95fd4247b3"}
        }).success(function(data, status, headers, config) {
        $scope.productDetail = data;
      }).error(function(data, status, headers, config) {
        window.alert("ERROR");
    });
  
    $scope.productId = $routeParams.productId;  

    $scope.addToCart = function(product) {
      $rootScope.$broadcast("addToCart", product);
    }
  }
);
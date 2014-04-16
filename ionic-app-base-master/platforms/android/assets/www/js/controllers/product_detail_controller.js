angular.module("spree").controller("ProductDetailCtrl", 
  function($scope, $http, $routeParams, $rootScope) {
    $http({
      method: "JSONP",
      url: $rootScope.URL + "/api/products/" + $routeParams.productId,
      params: {"callback": "JSON_CALLBACK"}
    }).success(function(data, status, headers, config) {
        $scope.productDetail = data;
    });
  
    $scope.productId = $routeParams.productId;  

    $scope.addToCart = function(product) {
      var sel = document.getElementById("productQuantity");
      var q = sel.options[sel.selectedIndex].text;
      $rootScope.$broadcast("addToCart", product, q);
    }

    $scope.quantity = 1;
    $scope.range = function(max) {
      var list = [];
      for (var i = 1; i < max; i++) {
        list.push(i);
      }

      return list;
    }
  }
);
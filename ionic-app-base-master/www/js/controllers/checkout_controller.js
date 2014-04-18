angular.module("spree").controller('CheckoutCtrl', 
  function($http, $scope, $location, $rootScope, Cart) {

    $scope.params = Cart.createRequestParameters();
    console.log($scope.params);

    $http({
      method: "POST",
      url: $rootScope.URL + "/api/checkouts?" + $scope.params,
      params: {"callback": "JSON_CALLBACK"}
    }).success(function(data, status, headers, config) {
        console.log(data);
    });
  }
);
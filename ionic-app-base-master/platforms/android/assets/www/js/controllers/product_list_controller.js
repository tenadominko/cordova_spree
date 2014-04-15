angular.module("spree").controller("ProductListCtrl", 
  function($scope, $http, $rootScope, $routeParams) {
    $http({
      method: 'JSONP',
      url: 'http://169.254.8.205:3000/api/products?q[taxons_id_in][]=' + $routeParams.taxonId,
      params: {"callback": "JSON_CALLBACK"}
    }).success(function(data, status, headers, config) {
        $scope.products = new Array();
        for (var i = 0; i < data.products.length; i++) {
          $scope.products.push(data.products[i]);
        }
    }); 
  }
);
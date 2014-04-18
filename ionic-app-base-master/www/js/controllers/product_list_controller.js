angular.module("spree").controller("ProductListCtrl", 
  function($scope, $http, $routeParams, $rootScope) {
    $http({
      method: 'JSONP',
      url: $rootScope.URL + '/api/products?q[taxons_id_in][]=' + $routeParams.taxonId,
      params: {"callback": "JSON_CALLBACK"}
    }).success(function(data, status, headers, config) {
        $scope.products = new Array();
        for (var i = 0; i < data.products.length; i++) {
          $scope.products.push(data.products[i]);
          if (data.products[i].has_variants) {
            $scope.products[i].image = $rootScope.URL + data.products[i].variants[0].images[0].large_url;
          } else {
            $scope.products[i].image = $rootScope.URL + data.products[i].master.images[0].large_url;
          }
        }
    }); 
  }
);
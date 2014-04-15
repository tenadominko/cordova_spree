angular.module("spree").controller('TaxonCtrl', 
  function($scope, $http, $routeParams) {

  if ($routeParams.taxonId != null) {
    $http({
    method: 'JSONP',
    url: 'http://169.254.8.205:3000/api/products?q[taxons_id_in][]=' + $routeParams.taxonId,
    params: {"callback": "JSON_CALLBACK"}
      }).success(function(data, status, headers, config) {
        $scope.products = new Array();
        for (var i = 0; i < data.products.length; i++) {
          $scope.products.push(data.products[i]);
        }
    }).error(function(data, status, headers, config) {
      window.alert("ERROR");
    });
  } else {
    $http({
    method: 'JSONP',
    url: 'http://169.254.8.205:3000/api/taxons',
    params: {"callback": "JSON_CALLBACK"}
      }).success(function(data, status, headers, config) {
        $scope.taxons = new Array();
        for (var i = 0; i < data.taxons.length; i++) {
          if (data.taxons[i].taxons.length == 0) {
            $scope.taxons.push(data.taxons[i]);
          }
        }
    }).error(function(data, status, headers, config) {
      $scope.taxons = data;
    });
  }

});
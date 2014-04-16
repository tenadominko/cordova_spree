angular.module("spree").controller('HomeCtrl', 
  function($scope, $http, $location, $rootScope) {
    $http({
      method: 'JSONP',
      url: $rootScope.URL + '/api/taxons',
      params: {"callback": "JSON_CALLBACK"}
    }).success(function(data, status, headers, config) {
      $scope.taxons = new Array();
      for (var i = 0; i < data.taxons.length; i++) {
        if (data.taxons[i].taxons.length == 0) {
          $scope.taxons.push(data.taxons[i]);
        }
      }
    });

    $scope.goHome = function() {
      $location.path("/home");
    }

    $scope.showCart = function() {
      $location.path("cart");
    }
});
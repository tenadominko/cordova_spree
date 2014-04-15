angular.module("spree").controller('HomeCtrl', 
  function($scope, $http, $rootScope) {
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
    });
});
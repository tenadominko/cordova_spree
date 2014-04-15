angular.module("spree").controller('CartCtrl', 
  function($scope) {
    $scope.addToCart = function(product) {
      if ($scope.cart == null) {
        $scope.cart = newArray();
      }
      $scope.cart.add(product);
    }

});
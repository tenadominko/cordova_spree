angular.module("spree").controller('CartCtrl', 
  function($scope, $http, Cart) {

    $scope.products = Cart.getCart();
});
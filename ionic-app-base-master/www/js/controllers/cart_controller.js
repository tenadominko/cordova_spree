angular.module("spree").controller('CartCtrl', 
  function($scope, $http, $location, Cart) {

    $scope.cart = Cart.getCart();
    $scope.items = $scope.cart.items;
    $scope.price = $scope.cart.price;

    $scope.$on("addToCart", function(evt, product) {
      Cart.addToCart(product, 1);
      $location.path("/cart");
    })
});
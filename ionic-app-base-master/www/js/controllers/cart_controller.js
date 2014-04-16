angular.module("spree").controller('CartCtrl', 
  function($scope, $location, Cart) {

    $scope.cart = Cart.getCart();
    $scope.items = $scope.cart.items;
    $scope.price = $scope.cart.price;

    $scope.$on("addToCart", function(evt, product, q) {
      Cart.addToCart(product, q);
      $location.path("/cart");
    });

    $scope.checkout = function() {
      $location.path("/checkout");
    }

    $scope.itemButtons = [
      {
        text: "Remove",
        type: "button-assertive",
        onTap: function(item) {
          Cart.removeFromCart(item);
          $scope.cart = Cart.getCart();
          $scope.items = $scope.cart.items;
          $scope.price = $scope.cart.price;
        }
      }
    ];
});
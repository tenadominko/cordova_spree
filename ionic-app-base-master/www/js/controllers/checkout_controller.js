angular.module("spree").controller('CheckoutCtrl', 
  function($scope, $location, $rootScope, Cart) {

    $scope.checkout = function() {
      $scope.cart = Cart.getCart();
      
    }
  }
);
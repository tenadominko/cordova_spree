angular.module("spree")
.factory("Cart", function() {
  var cart = {items:[]};

  return {
    addToCart: function(product, quantity) {
      var should_add = true;

      for (var i = 0; i < cart.items.length; i++) {
        if (cart.items[i].product.id == product.id) {
          cart.items[i].quantity++;
          should_add = false;
        }
      }

      if (should_add) {
        cart.items.push({
          product: product,
          quantity: quantity
        });
      }
    },

    getCart: function() {
      cart.price = 0;

      for (var i = 0; i < cart.items.length; i++) {
        cart.price += cart.items[i].product.price * cart.items[i].quantity;
      }

      return cart;
    }
  }
})
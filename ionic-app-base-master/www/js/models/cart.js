angular.module("spree")
.factory("Cart", function() {
  var cart = {items:[]};

  return {
    addToCart: function(product, quantity) {
      cart.items.push({
        product: product,
        quantity: quantity,
        price: product.price
      });
    },

    getCart: function() {
      return cart.items;
    }
  }
})
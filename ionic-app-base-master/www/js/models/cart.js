angular.module("spree")
.factory("Cart", function() {
  var cart = {items:[]};

  return {
    addToCart: function(product, quantity) {
      var should_add = true;
      var var_id;

      for (var i = 0; i < cart.items.length; i++) {
        if (cart.items[i].product.id == product.id) {
          cart.items[i].quantity++;
          should_add = false;
        }
      }

      if (should_add) {
        cart.items.push({
          product: product,
          quantity: quantity,
        });
      }
    },

    getCart: function() {
      cart.price = 0;

      for (var i = 0; i < cart.items.length; i++) {
        cart.price += cart.items[i].product.price * cart.items[i].quantity;
      }

      return cart;
    },

    removeFromCart: function(item) {
      for (var i = 0; i < cart.items.length; i++) {
        if (cart.items[i].product.id == item.product.id) {
          cart.items.splice(i, 1);
        }
      }
    },

    createRequestParameters: function() {
      var par = "";

      for (var i = 0; i < cart.items.length; i++) {
        par += "order[line_items]";
        par += "[" + cart.items[i].product.id + "]";
        par += "[variant_id]=" + cart.items[i].product.id;
        par += "&order[line_items]";
        par += "[" + cart.items[i].product.id + "]";
        par += "[quantity]=" + cart.items[i].quantity;

        if (i != (cart.items.length - 1)) {
          par += "&";
        } 
      }

      return par;
    }
  }
})
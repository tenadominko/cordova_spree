angular.module("spree", [
  "ionic",
  "ngRoute"
  ]).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'js/templates/home.html',
        controller: 'HomeCtrl'
      }).
      when('/taxons/:taxonId', {
        templateUrl: 'js/templates/productList.html',
        controller: 'ProductListCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'js/templates/productDetail.html',
        controller: 'ProductDetailCtrl'
      }).
      when('/cart', {
        templateUrl: 'js/templates/cart.html',
        controller: 'CartCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }])

 .run([ "$rootScope", 
    function($rootScope) {
      $rootScope.URL = "http://169.254.8.205:3000";
    }
]);
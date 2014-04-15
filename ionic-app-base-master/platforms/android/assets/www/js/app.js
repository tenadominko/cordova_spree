angular.module("spree", [
  "ionic",
  "ngRoute"
  ]).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'js/templates/taxons.html',
        controller: 'TaxonCtrl'
      }).
      when('/taxons/:taxonId', {
        templateUrl: 'js/templates/productList.html',
        controller: 'TaxonCtrl'
      }).
      when('/products', {
        templateUrl: 'js/templates/productList.html',
        controller: 'ProductListCtrl'
      }).
      when('/products/:productId', {
        templateUrl: 'js/templates/productDetail.html',
        controller: 'ProductDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }])

 .run([ "$rootScope", 
    function($rootScope, $location) {
      $rootScope.URL = "http://169.254.8.205:3000";
    }
]);
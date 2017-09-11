(function () {

  'use strict';

  function ProductsController($scope, $state, products) {

    var _instance = this;
    _instance.products = products.data;

  }
  angular.module('app.dashboard.products')
    .controller('productsController', ProductsController);
})();

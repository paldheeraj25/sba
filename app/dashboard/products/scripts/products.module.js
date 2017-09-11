(function () {

  'use strict';

  function registerStates(stateProvider) {

    // Infrastructure Provider - List State
    var productsListState = {
      name: 'app.products-list',
      url: '/products-list',
      views: {
        "content@app": {
          templateUrl: 'app/dashboard/products/views/products.tpl.html',
          controller: 'productsController',
          controllerAs: 'products',
          resolve: {
            srcipts: function (lazyScript) {
              return lazyScript.register([
                'build/vendor.ui.js'
              ]);
            },
            products: function (productsDataService) {
              return productsDataService.getProducts();
            }
          }
        }
      },
      data: {

      },
    };

    // Register states with the UI Router State Provider
    stateProvider
      .state(productsListState);
  }

  // Function which configures the module
  function configureModule($stateProvider) {
    registerStates($stateProvider);
  }

  // Products Module declaration
  var module = angular.module('app.dashboard.products', []);

  // Configure the module
  module.config(configureModule);

})();
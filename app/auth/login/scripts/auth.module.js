(function () {

  'use strict';

  function registerStates(stateProvider) {

    // Infrastructure Provider - List State
    var loginState = {
      name: 'login',
      url: '/login',
      views: {
        root: {
          templateUrl: 'app/auth/login/views/login.html',
          controller: 'LoginController',
          controllerAs: 'login',
          resolve: {
            srcipts: function (lazyScript) {
              return lazyScript.register([
                'build/vendor.ui.js'
              ]);
            }
          }
        }
      },
      data: {
        title: 'Login',
        htmlId: 'extr-page'
      },
    };

    // Register states with the UI Router State Provider
    stateProvider
      .state(loginState);
  }

  // Function which configures the module
  function configureModule($stateProvider) {
    registerStates($stateProvider);
  }

  // Auth Module declaration
  var module = angular.module('auth.module', []);

  // Configure the module
  module.config(configureModule);

})();
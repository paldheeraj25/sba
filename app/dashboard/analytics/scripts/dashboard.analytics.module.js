(function () {

  'use strict';

  function registerStates(stateProvider) {

    // Infrastructure Provider - List State
    var analyticsState = {
      name: 'app.dashboardAnalytics',
      url: '/dasboard-analytics',
      views: {
        "content@app": {
          templateUrl: 'app/dashboard/analytics/views/data-analytics.tpl.html',
          controller: 'DashboardAnalyticsController',
          controllerAs: 'dashboard',
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
        title: 'Dashboard Social'
      },
    };

    // Register states with the UI Router State Provider
    stateProvider
      .state(analyticsState);
  }

  // Function which configures the module
  function configureModule($stateProvider) {
    registerStates($stateProvider);
  }

  // Products Module declaration
  var module = angular.module('app.dashboard.analytics', []);

  // Configure the module
  module.config(configureModule);

})();
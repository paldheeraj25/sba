(function () {

  'use strict';

  function registerStates(stateProvider) {

    // Environment Type- View State
    var uploadState = {
      name: 'app.dashboard-upload-excel',
      url: '/dashboard-upload-excel',
      views: {
        "content@app": {
          templateUrl: 'app/dashboard/upload-excel/views/upload-excel.tpl.html',
          controller: 'UploadExcelController',
          resolve: {
            scripts: function (lazyScript) {
              return lazyScript.register('build/vendor.ui.js')
            }
          }
        }
      },
      data: {
        title: 'Dashboard Upload Excel'
      }
    };

    // Register states with the UI Router State Provider
    stateProvider
      .state(uploadState)
  }



  // Function which configures the module
  function configureModule($stateProvider) {
    registerStates($stateProvider);
  }

  // Environemnt Type Module declaration
  var module = angular.module('upload-excel', []);

  // Configure the module
  module.config(configureModule);

})();
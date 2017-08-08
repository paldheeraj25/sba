'use strict';

angular.module('app.dashboard', [
  'ui.router',
  'ngResource'
])

  .config(function ($stateProvider) {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          "content@app": {
            controller: 'DashboardCtrl',
            templateUrl: 'app/dashboard/dashboard.html'
          }
        },
        data: {
          title: 'Dashboard'
        }
      })
      .state('app.dashboard-social', {
        url: '/dashboard-social',
        views: {
          "content@app": {
            templateUrl: 'app/dashboard/social-wall.html'
          }
        },
        data: {
          title: 'Dashboard Social'
        }
      }).state('app.dashboard-upload-excel', {
        url: '/dashboard-upload-excel',
        views: {
          "content@app": {
            templateUrl: 'app/dashboard/upload-excel.tpl.html',
            controller: function ($scope) {
              $scope.dropzoneConfig = {
                'options': { // passed into the Dropzone constructor
                  'url': '/api/plug'
                },
                'eventHandlers': {
                  'sending': function (file, xhr, formData) {
                  },
                  'success': function (file, response) {
                  }
                }
              };
            },
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
      });
  });

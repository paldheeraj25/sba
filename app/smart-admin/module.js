"use strict";


angular.module('app.smartAdmin', ['ui.router']);


angular.module('app.smartAdmin').config(function ($stateProvider) {

  $stateProvider
    .state('app.smartAdmin', {
      abstract: true,
      data: {
        title: 'SmartAdmin Intel'
      }
    })

    .state('app.smartAdmin.appLayout', {
      url: '/app-layout',
      data: {
        title: 'App Layout'
      },
      views: {
        "content@app": {
          templateUrl: 'app/smart-admin/views/app-layout.html'
        }
      }
    })

    .state('app.smartAdmin.diffVer', {
      url: '/different-versions',
      data: {
        title: 'Different Versions'
      },
      views: {
        "content@app": {
          templateUrl: 'app/smart-admin/views/different-versions.html'
        }
      }
    })

    .state('app.smartAdmin.appLayouts', {
      url: '/app-layouts',
      data: {
        title: 'App Layouts'
      },
      views: {
        "content@app": {
          templateUrl: 'app/smart-admin/views/app-layouts.html'
        }
      }
    })
    .state('app.smartAdmin.user-managment', {
      url: '/user-managment',
      data: {
        title: 'User Management'
      },
      views: {
        "content@app": {
          controller: 'UserController',
          controllerAs: 'user',
          templateUrl: 'app/smart-admin/views/user.html',
          resolve: {
            scripts: function (lazyScript) {
              return lazyScript.register('build/vendor.ui.js');
            }
          }
        }
      }
    })
    .state('app.smartAdmin.user-managment-list', {
      url: '/user-managment-list',
      data: {
        title: 'User Management List'
      },
      views: {
        "content@app": {
          controller: 'UserListController',
          templateUrl: 'app/smart-admin/views/user-list.html',
          resolve: {
            scripts: function (lazyScript) {
              return lazyScript.register('build/vendor.ui.js')
            }
          }
        }
      }
    })
    .state('app.smartAdmin.prebuiltSkins', {
      url: '/prebuilt-skins',
      data: {
        title: 'Prebuilt Skins'
      },
      views: {
        "content@app": {
          templateUrl: 'app/smart-admin/views/prebuilt-skins.html'
        }
      }
    })
    .state('app.smartAdmin.invoice', {
      url: '/invoice-check',
      data: {
        title: 'Invoice'
      },
      views: {
        "content@app": {
          templateUrl: 'app/misc/views/invoice.html'
        }
      }
    })
});
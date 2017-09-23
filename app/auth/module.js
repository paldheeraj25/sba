"use strict";

angular.module('app.auth', [
  'ui.router',
  'auth.module'
]).config(function ($stateProvider
) {
  $stateProvider.state('realLogin', {
    url: '/real-login',

    views: {
      root: {
        templateUrl: "app/auth/login/login.html"
      }
    },
    data: {
      title: 'Login',
      rootId: 'extra-page'
    }

  })

    .state('register', {
      url: '/register',
      views: {
        root: {
          templateUrl: 'app/auth/register/views/register.html',
          controller: 'RegisterController'
        }
      },
      data: {
        title: 'Register',
        htmlId: 'extr-page'
      },
      resolve: {
        srcipts: function (lazyScript) {
          return lazyScript.register([
            'build/vendor.ui.js'
          ]);
        }
      }
    })

    .state('forgotPassword', {
      url: '/forgot-password',
      views: {
        root: {
          templateUrl: 'app/auth/views/forgot-password.html'
        }
      },
      data: {
        title: 'Forgot Password',
        htmlId: 'extr-page'
      }
    })

    .state('lock', {
      url: '/lock',
      views: {
        root: {
          templateUrl: 'app/auth/views/lock.html'
        }
      },
      data: {
        title: 'Locked Screen',
        htmlId: 'lock-page'
      }
    });


}).constant('authKeys', {
  googleClientId: '',
  facebookAppId: ''
});

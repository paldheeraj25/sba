(function () {

  'use strict';

  /* jshint validthis:true */

  // auth service to handle login
  function LoginSecurityService($http, $location, $state) {
    var HOST = 'http://', BASE_URL = $location.host(), PORT = ':5012';
    var RequestUrl = HOST + BASE_URL + PORT;

    function login(user) {
      var req = {
        method: 'POST',
        url: RequestUrl + '/api/login',
        data: {
          'email': user.email,
          'password': user.password
        }
      };

      $http(req).then(function (data) {
        if (data) {
          $state.go('app.dashboard');
        }
      }, function (err) {
        throw err;
      });
    }

    return _.create({
      login: login
    });
  }

  angular.module('auth.module')
    .factory('loginSecurityService', LoginSecurityService);

})();
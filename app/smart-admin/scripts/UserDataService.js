(function () {

  'use strict';

  /* jshint validthis:true */


  function userDataService(
    $http, $location, $localStorage) {
    var HOST = 'http://', BASE_URL = $location.host(), PORT = ':5012';
    var RequestUrl = HOST + BASE_URL + PORT;

    function registerUser(role) {
      var req = {
        method: 'POST',
        url: RequestUrl + '/api/register',
        headers: {
          Authorization: 'bearer ' + $localStorage.token
        },
        data: role
      };

      return $http(req).then(function (data) {
        if (data) {
          return data;
        }
      }, function (err) {
        throw err;
      });
    }

    return _.create({
      registerUser: registerUser
    });

  }

  angular.module('app.smartAdmin')
    .factory('userDataService', userDataService);

})();
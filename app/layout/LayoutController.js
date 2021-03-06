"use strict";

angular.module('app.auth').controller('LayoutController', function ($scope, $state, $stateParams, $http, $location, $localStorage) {
  var _instance = this;
  var HOST = 'http://', BASE_URL = $location.host(), PORT = ':5012';
  var RequestUrl = HOST + BASE_URL + PORT;

  _instance.signOut = function (user) {
    var req = {
      method: 'GET',
      url: RequestUrl + '/api/logout'
    };

    $http(req).then(function (data) {
      if (data) {
        $localStorage.token = null;
        delete $localStorage.token;
        $state.go('login');
      }
    }, function (err) {
      throw err;
    });
  }
})

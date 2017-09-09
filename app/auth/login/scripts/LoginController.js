"use strict";

angular.module('app.auth').controller('LoginController', function ($scope, $state, loginSecurityService) {
  var _instance = this;

  _instance.singIn = function (user) {
    loginSecurityService.login(user);
  };

});
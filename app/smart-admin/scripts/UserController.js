'use strict';

angular.module('app.smartAdmin').controller('UserController', function ($scope, userDataService) {

  var _instance = this;
  _instance.role = [{ name: 'admin', type: 'admin' },
  { name: 'operator', type: 'operator' },
  { name: 'system admin', type: 'system-admin' }];

  _instance.createRole = function (role) {
    console.log(role);
    return userDataService.registerUser(role).then(function (data) {
      console.log(data);
    });
  };
});
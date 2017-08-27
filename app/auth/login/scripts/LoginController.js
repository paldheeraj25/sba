"use strict";

angular.module('app.auth').controller('LoginController', function ($scope, $state, $stateParams) {
  var _instance = this;

  $scope.singIn = function (user) {
    var auth = firebase.auth();
    var promise = auth.signInWithEmailAndPassword(user.email, user.password);
    promise.then(function (user) {
      $state.go('app.data-analytics', { auth: user });
    },
      function (data) {
        console.log(data);
      });
  }

})

"use strict";

angular.module('app.auth').controller('RegisterController', function ($scope, $state, $rootScope) {
  var _instance = this;
  $scope.signUp = function (user) {

    var auth = firebase.auth();
    var promise = auth.createUserWithEmailAndPassword(user.email, user.password);
    promise.then(function (data) {
      $state.transitionTo('login', { auth: data });
    },
      function (data) {
        //console.log(data);
      });
  };

});

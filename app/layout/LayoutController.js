"use strict";

angular.module('app.auth').controller('LayoutController', function ($scope, $state, $stateParams) {
  var _instance = this;

  $scope.signOut = function (user) {
    firebase.auth().signOut();
    $state.go('login');
  };

})

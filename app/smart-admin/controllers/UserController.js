'use strict';

angular.module('app.smartAdmin').controller('UserController', function ($scope, $interval, CalendarEvent) {

  // Live Feeds Widget Data And Display Controls
  // Live Stats Tab
  var databaseRef = firebase.database().ref().child('role');
  var databaseUserRef = firebase.database().ref().child('user');
  databaseRef.once('value').then(function (snapshot) {
    //console.log(snapshot.val());
    if (snapshot.val() !== null) {
      $scope.role = snapshot.val();
      return $scope.role;
    }
  });

  $scope.creaRole = function (user) {
    delete user.initialized;
    if (user.active) {
      console.log(user.active)
      user.active = 1;
    }
    databaseUserRef.push().set(user);
  };

});
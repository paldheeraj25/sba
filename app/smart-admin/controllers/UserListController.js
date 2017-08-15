'use strict';

angular.module('app.smartAdmin').controller('UserListController', function ($scope, $interval, CalendarEvent) {

  // Live Feeds Widget Data And Display Controls
  // Live Stats Tab
  var databaseRef = firebase.database().ref().child('role');
  var databaseUserRef = firebase.database().ref().child('user');
  databaseUserRef.once('value').then(function (snapshot) {
    console.log(snapshot.val());
    if (snapshot.val() !== null) {
      $scope.user = snapshot.val();
      return $scope.user;
    }
  });

});
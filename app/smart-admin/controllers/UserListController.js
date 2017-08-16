'use strict';

angular.module('app.smartAdmin').controller('UserListController', function ($scope, $interval, CalendarEvent) {

  // Live Feeds Widget Data And Display Controls
  // Live Stats Tab
  var databaseRef = firebase.database().ref().child('role');
  var databaseUserRef = firebase.database().ref().child('user');
  function getUsers() {
    databaseUserRef.orderByChild("active").equalTo(1).once('value').then(function (snapshot) {
      console.log(snapshot.val());
      if (snapshot.val() !== null) {
        $scope.user = snapshot.val();
        return $scope.user;
      }
    });
  }
  getUsers();

  $scope.deletUser = function (user) {
    //console.log(user);
    databaseUserRef.orderByChild("email").equalTo(user.email).once('value').then(function (snapshot) {
      databaseUserRef.child(_.keys(snapshot.val())[0]).update({ active: 0 }).then(function () {
        getUsers();
      });
    });
  }

});
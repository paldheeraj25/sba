'use strict';

angular.module('app.dashboard').controller('ProductsCntroller', function ($scope, $interval, CalendarEvent) {

  // Live Feeds Widget Data And Display Controls
  // Live Stats Tab
  var databaseRef = firebase.database().ref().child('productshoe');
  databaseRef.once('value').then(function (snapshot) {
    //console.log(snapshot.val());
    if (snapshot.val() !== null) {
      $scope.products = snapshot.val();
      return $scope.products;
    }
  });

});
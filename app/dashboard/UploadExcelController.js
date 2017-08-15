'use strict';

angular.module('app.dashboard').controller('UploadExcelController', function ($scope, $timeout, $rootScope, $firebaseObject) {
  var databaseRef = firebase.database().ref().child('productshoe');
  // return databaseRef.once('value').then(function (snapshot) {
  //   console.log(snapshot.val());
  //   if (snapshot.val() !== null) {
  //     var productObject = snapshot.val();
  //     return productObject;
  //   }
  // });
  $scope.uploadFile = function () {
    // /console.log($rootScope.excelJsonData);
    var jsonObject = _.clone($rootScope.excelJsonData);
    var dataBaseObject = [];
    _.each(jsonObject, function (object) {
      if (object[0] !== "") {
        dataBaseObject.push({ id: object[0], name: object[1], date: object[2], expiry: object[3] });
      }
    });
    var dataBaseObject = _.indexBy(dataBaseObject, 'id');
    _.each(dataBaseObject, function (k, v) {
      if (k !== '') {
        databaseRef.child(v).set(k);
      }
    });
    // $scope.isUploading = true;
    // $timeout(function () {
    //   $scope.isUploading = false;
    // }, 3000);
  }

});
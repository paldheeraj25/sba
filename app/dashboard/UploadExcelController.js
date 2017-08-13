'use strict';

angular.module('app.dashboard').controller('UploadExcelController', function ($scope, $timeout, $rootScope) {
  var ref = firebase.database().ref().child('product');
  //console.log(ref.child('392c0144bcb7').once('value'));
  console.log('test');
  return ref.once('value').then(function (snapshot) {
    console.log(snapshot.val());
    if (snapshot.val() !== null) {
      var productObject = snapshot.val();
      return productObject;
    }
  });
  // $scope.uploadFile = function () {

  //   var jsonObject = _.clone($rootScope.excelJsonData);
  //   var dataBaseObject = [];
  //   _.each(jsonObject, function (object) {
  //     if (object[0] !== "") {
  //       dataBaseObject.push({ id: object[0], name: object[1], price: object[2] });
  //     }
  //   });
  //   console.log(dataBaseObject);
  //   $scope.isUploading = true;
  //   $timeout(function () {
  //     $scope.isUploading = false;
  //   }, 3000);
  //}

});
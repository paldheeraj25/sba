'use strict';

angular.module('app.dashboard').controller('UploadExcelController', function ($scope, $timeout, $rootScope, $firebaseObject, $http, APP_CONFIG) {

  //getting the user token
  var idToken;
  firebase.auth().currentUser.getToken(/* forceRefresh */ true).then(function (token) {
    // Send token to your backend via HTTPS
    // ...
    console.log('this is the token');
    console.log(idToken);
    idToken = token;
  }).catch(function (error) {
    // Handle error
  });

  //
  var databaseRef = firebase.database().ref().child('productshoe');
  var base64Csv;
  $scope.onChange = function (e, fileList) {
  };

  $scope.onLoad = function (e, reader, file, fileList, fileOjects, fileObj) {
    $scope.fileName = file.name;
    base64Csv = fileObj.base64;
  };

  var uploadedCount = 0;

  $scope.files = [];

  $scope.uploadFile = function () {
    $scope.isUploading = true;
    var req = {
      method: 'POST',
      url: APP_CONFIG.dataBaseUrl + '/upload',
      data: { csv: base64Csv, idToken: idToken }
    }

    $http(req).then(function (data) {
      $scope.isUploading = false;
    });
  }

});
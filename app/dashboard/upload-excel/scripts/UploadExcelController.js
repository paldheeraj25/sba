'use strict';

angular.module('app.dashboard').controller('UploadExcelController', function ($scope, $timeout, $rootScope, $firebaseObject, $http, APP_CONFIG) {
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
      data: { csv: base64Csv }
    }

    $http(req).then(function (data) {
      $scope.isUploading = false;
    });
  }

});
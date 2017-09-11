'use strict';

angular.module('app.dashboard').controller('UploadExcelController', function ($scope, $timeout, $rootScope, $http, APP_CONFIG, uploadExcelDatService) {

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
    uploadExcelDatService.uploadExcel(base64Csv).then(function (data) {
      if (data) {
        $scope.isUploading = false;
      }
    });

  }

});
(function () {

  'use strict';

  /* jshint validthis:true */


  function uploadExcelDatService(
    $http, $location, $localStorage) {
    var HOST = 'http://', BASE_URL = $location.host(), PORT = ':5012';
    var RequestUrl = HOST + BASE_URL + PORT;

    function uploadExcel(base64Csv) {
      var req = {
        method: 'POST',
        url: RequestUrl + '/api/upload',
        data: { csv: base64Csv },
        headers: {
          Authorization: 'bearer ' + $localStorage.token
        }
      }

      return $http(req).then(function (data) {
        return data;
      });
    }

    return _.create({
      uploadExcel: uploadExcel
    });

  }

  angular.module('upload-excel')
    .factory('uploadExcelDatService', uploadExcelDatService);

})();
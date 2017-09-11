(function () {

  'use strict';

  /* jshint validthis:true */


  function productsDataService(
    $http, $location, $localStorage) {
    var HOST = 'http://', BASE_URL = $location.host(), PORT = ':5012';
    var RequestUrl = HOST + BASE_URL + PORT;

    function getProducts() {
      var req = {
        method: 'GET',
        url: RequestUrl + '/api/products',
        headers: {
          Authorization: 'bearer ' + $localStorage.token
        }
      };

      return $http(req).then(function (data) {
        if (data) {
          return data;
        }
      }, function (err) {
        throw err;
      });
    }

    return _.create({
      getProducts: getProducts
    });

  }

  angular.module('app.dashboard.products')
    .factory('productsDataService', productsDataService);

})();
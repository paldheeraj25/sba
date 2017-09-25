'use strict';

angular.module('app.dashboard').controller('DataAnalyticsController', function ($scope, $state, $interval, CalendarEvent) {

  function getFakeItem(index, prevValue) {
    var limitUp = Math.min(100, prevValue + 5),
      limitDown = Math.abs(prevValue - 5);
    return [
      index,
      _.random(limitDown, limitUp, true)
    ]
  }

  function getFakeData() {
    return _(_.range(199)).reduce(function (out, number) {

      out.push(getFakeItem(number + 1, _.last(out)[1]));
      return out;
    }, [
        [0, 50] // starting point
      ])
  }

  $scope.autoUpdate = false;

  var updateInterval;
  $scope.$watch('autoUpdate', function (autoUpdate) {

    if (autoUpdate) {
      updateInterval = $interval(function () {
        var stats = _.rest($scope.liveStats[0]).map(function (elem, i) {
          elem[0] = i;
          return elem;
        });
        stats.push([199, _.last(stats)[1]]);
        $scope.liveStats = [stats];
      }, 1500)
    } else {
      $interval.cancel(updateInterval);
    }
  });


  $scope.liveStats = [getFakeData()];

  // bird eye widget data
  $scope.countriesVisitsData = {
    "US": 4977,
    "AU": 4873,
    "IN": 3671,
    "BR": 2476,
    "TR": 1476,
    "CN": 146,
    "CA": 134,
    "BD": 100
  };

  $scope.events = [];

  $scope.salesChartData = [
    [1196463600000, 0],
    [1196550000000, 0],
    [1196636400000, 0],
    [1196722800000, 77],
    [1196809200000, 3636],
    [1196895600000, 3575],
    [1196982000000, 2736],
    [1197068400000, 1086],
    [1197154800000, 676],
    [1197241200000, 1205],
    [1197327600000, 906],
    [1197414000000, 710],
    [1197500400000, 639],
    [1197586800000, 540],
    [1197673200000, 435],
    [1197759600000, 301],
    [1197846000000, 575],
    [1197932400000, 481],
    [1198018800000, 591],
    [1198105200000, 608],
    [1198191600000, 459],
    [1198278000000, 234],
    [1198364400000, 1352],
    [1198450800000, 686],
    [1198537200000, 279],
    [1198623600000, 449],
    [1198710000000, 468],
    [1198796400000, 392],
    [1198882800000, 282],
    [1198969200000, 208],
    [1199055600000, 229],
    [1199142000000, 177],
    [1199228400000, 374],
    [1199314800000, 436],
    [1199401200000, 404],
    [1199487600000, 253],
    [1199574000000, 218],
    [1199660400000, 476],
    [1199746800000, 462],
    [1199833200000, 500],
    [1199919600000, 700],
    [1200006000000, 750],
    [1200092400000, 600],
    [1200178800000, 500],
    [1200265200000, 900],
    [1200351600000, 930],
    [1200438000000, 1200],
    [1200524400000, 980],
    [1200610800000, 950],
    [1200697200000, 900],
    [1200783600000, 1000],
    [1200870000000, 1050],
    [1200956400000, 1150],
    [1201042800000, 1100],
    [1201129200000, 1200],
    [1201215600000, 1300],
    [1201302000000, 1700],
    [1201388400000, 1450],
    [1201474800000, 1500],
    [1201561200000, 546],
    [1201647600000, 614],
    [1201734000000, 954],
    [1201820400000, 1700],
    [1201906800000, 1800],
    [1201993200000, 1900],
    [1202079600000, 2000],
    [1202166000000, 2100],
    [1202252400000, 2200],
    [1202338800000, 2300],
    [1202425200000, 2400],
    [1202511600000, 2550],
    [1202598000000, 2600],
    [1202684400000, 2500],
    [1202770800000, 2700],
    [1202857200000, 2750],
    [1202943600000, 2800],
    [1203030000000, 3245],
    [1203116400000, 3345],
    [1203202800000, 3000],
    [1203289200000, 3200],
    [1203375600000, 3300],
    [1203462000000, 3400],
    [1203548400000, 3600],
    [1203634800000, 3700],
    [1203721200000, 3800],
    [1203807600000, 4000],
    [1203894000000, 4500]
  ]
    .map(function (item) {
      return [
        item[0] + 60 * 60 * 1000,
        item[1]
      ]
    });


  $scope.pieChartData = _.range(Math.floor(Math.random() * 10) + 1).map(function (i) {
    return {
      label: "Series" + (i + 1),
      data: Math.floor(Math.random() * 100) + 1
    }
  });

});
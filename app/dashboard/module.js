'use strict';

angular.module('app.dashboard', [
  'ui.router',
  'ngResource'
])

  .config(function ($stateProvider) {
    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          "content@app": {
            controller: 'DashboardCtrl',
            templateUrl: 'app/dashboard/dashboard.html'
          }
        },
        data: {
          title: 'Dashboard'
        }
      })
      .state('app.dashboard-social', {
        url: '/dashboard-social',
        views: {
          "content@app": {
            templateUrl: 'app/dashboard/social-wall.html'
          }
        },
        data: {
          title: 'Dashboard Social'
        }
      }).state('app.data-analytics', {
        url: '/data-analytics',
        views: {
          "content@app": {
            controller: 'DataAnalyticsController',
            templateUrl: 'app/dashboard/data-analytics.tpl.html',
            resolve: {
              scripts: function (lazyScript) {
                return lazyScript.register('build/vendor.ui.js')
              }
            }
          }
        },
        data: {
          title: 'Dashboard Upload Excel'
        }
      })
      .state('app.map-database', {
        url: '/map-database',
        views: {
          "content@app": {
            templateUrl: 'app/dashboard/map-database.tpl.html',
            controller: function ($scope) {

            },
            resolve: {
              scripts: function (lazyScript) {
                return lazyScript.register('build/vendor.ui.js')
              }
            }
          }
        },
        data: {
          title: 'Dashboard Upload Excel'
        }
      }).state('app.dashboard-upload-excel', {
        url: '/dashboard-upload-excel',
        views: {
          "content@app": {
            templateUrl: 'app/dashboard/upload-excel.tpl.html',
            controller: function ($scope, $timeout) {
              $scope.uploadFile = function () {
                $scope.isUploading = true;
                $timeout(function () {
                  $scope.isUploading = false;
                }, 3000);
              }
            },
            resolve: {
              scripts: function (lazyScript) {
                return lazyScript.register('build/vendor.ui.js')
              }
            }
          }
        },
        data: {
          title: 'Dashboard Upload Excel'
        }
      });
  })
  .directive('flotPieChartA', function () {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="chart"></div>',
      scope: {
        data: '='
      },
      link: function (scope, element) {
        $.plot(element, scope.data, {
          series: {
            pie: {
              show: true,
              innerRadius: 0.5,
              radius: 1,
              label: {
                show: false,
                radius: 2 / 3,
                formatter: function (label, series) {
                  return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                },
                threshold: 0.1
              }
            }
          },
          legend: {
            show: true,
            noColumns: 1, // number of colums in legend table
            labelFormatter: null, // fn: string -> string
            labelBoxBorderColor: "#000", // border color for the little label boxes
            container: null, // container (as jQuery object) to put legend in, null means default on top of graph
            position: "ne", // position of default legend container within plot
            margin: [5, 10], // distance from grid edge to default legend container within plot
            backgroundColor: "#efefef", // null means auto-detect
            backgroundOpacity: 1 // set to 0 to avoid background
          },
          grid: {
            hoverable: true,
            clickable: true
          },
        });

      }
    }
  })
  .directive('flotSalesChartA', function (FlotConfig) {
    return {
      restrict: 'E',
      replace: true,
      template: '<div class="chart"></div>',
      scope: {
        data: '='
      },
      link: function (scope, element) {

        $.plot(element, [scope.data], {
          xaxis: {
            mode: "time",
            tickLength: 5
          },
          series: {
            lines: {
              show: true,
              lineWidth: 1,
              fill: true,
              fillColor: {
                colors: [{
                  opacity: 0.1
                }, {
                  opacity: 0.15
                }]
              }
            },
            //points: { show: true },
            shadowSize: 0
          },
          selection: {
            mode: "x"
          },
          grid: {
            hoverable: true,
            clickable: true,
            tickColor: FlotConfig.chartBorderColor,
            borderWidth: 0,
            borderColor: FlotConfig.chartBorderColor
          },
          tooltip: true,
          tooltipOpts: {
            content: "Your sales for <b>%x</b> was <span>$%y</span>",
            dateFormat: "%y-%0m-%0d",
            defaultTheme: false
          },
          colors: [FlotConfig.chartSecond]

        });

      }
    }
  })
  .directive('fileModel', ['$parse', function ($parse) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var model = $parse(attrs.fileModel);
        var modelSetter = model.assign;

        element.bind('change', function () {
          scope.$apply(function () {
            modelSetter(scope, element[0].files[0]);
          });
        });
      }
    };
  }]);

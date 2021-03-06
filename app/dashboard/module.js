'use strict';

angular.module('app.dashboard', [
  'ui.router',
  'ngResource',
  'naif.base64',
  'upload-excel',
  'app.dashboard.products',
  'app.dashboard.analytics',
  'angularUtils.directives.dirPagination'
])

  .config(function ($stateProvider) {

    $stateProvider
      .state('app.dashboard', {
        url: '/dashboard',
        params: { auth: null },
        resolve:
        {
          Auth: function ($stateParams) {
            return $stateParams.auth;
          }
        },
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
      })
      .state('app.map-database', {
        url: '/map-database',
        views: {
          "content@app": {
            templateUrl: 'app/dashboard/map-database.tpl.html',
            controller: function ($scope) {
              $scope.choices = [{ id: 'choice1' }, { id: 'choice2' }];

              $scope.addNewChoice = function () {
                var newItemNo = $scope.choices.length + 1;
                $scope.choices.push({ 'id': 'choice' + newItemNo });
              };

              $scope.removeChoice = function () {
                var lastItem = $scope.choices.length - 1;
                $scope.choices.splice(lastItem);
              };
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
      })
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
  }).directive('fileReader', function ($rootScope) {
    return {
      scope: {
        fileReader: "="
      },
      link: function (scope, element, rootScope) {
        scope.sealedBit = [];
        $(element).on('change', function (changeEvent) {
          var files = changeEvent.target.files;
          if (files.length) {
            var r = new FileReader();
            r.onload = function (e) {
              var contents = e.target.result;
              scope.$apply(function () {
                //scope.fileReader = contents;
                var array = contents.split(',');
                //json logic
                var csv_data = contents;
                Papa.parse(contents, {
                  complete: function (results) {
                    console.log("Finished:", results.data);
                    $rootScope.excelJsonData = results.data;
                  }
                });
              });
            };
            r.readAsText(files[0]);
          }
        });
      }
    };
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

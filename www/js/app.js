// var module = ons.bootstrap('app', ['onsen']);
var module = angular.module('app', ['onsen']);
module.controller('AppController', function($scope) {});
module.controller('PageController', function($scope) {
  ons.ready(function() {
    // Init code here

  });
});
module.controller('BeerCtrl', function($scope) {
  ons.ready(function() {
    // Init code here

  });
});
module.controller('LeftOrRightCtrl', ['$scope', '$timeout',
  function($scope, $timeout) {
    ons.ready(function() {
      // Init code here
      $scope.state = {
        state: 0,
        clicked: {
          color: '#3498db'
        }
      };
      $scope.doubleTapIt = function () {
        console.log('test');
        $timeout(function() {
          $scope.state.clicked = {
            color: '#f1c40f'
            };
        }, 500);
        $scope.state.clicked = {
          };
      };
      $scope.tapIt = function() {
        $scope.state.clicked = {
            color: '#c0392b'
          };
        $timeout(function() {
          $scope.state.clicked = {
              color: '#3498db'
            };
        }, 250);
        if (Math.floor((Math.random() * 10) + 1) % 2 === 0) {
          $scope.state.state = 1;
        } else {
          $scope.state.state = 2;
        }
      };
    });
  }
]);

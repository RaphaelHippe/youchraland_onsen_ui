// var module = ons.bootstrap('app', ['onsen']);
var module = angular.module('app', ['onsen']);
module.controller('AppController', function($scope) {});
module.controller('PageController', function($scope) {
  ons.ready(function() {
    // Init code here
    $scope.doSomething = function () {
      console.log('test');
    };
  });
});
module.controller('LeftOrRightCtrl', function($scope) {
  ons.ready(function() {
    // Init code here
    $scope.state = {
      state: 0
    };
    $scope.tapIt = function () {
      if (Math.floor((Math.random() * 10) + 1) % 2 === 0) {
        $scope.state = {
          state: 1
        };
      } else {
        $scope.state = {
          state: 2
        };
      }
    };
  });
});

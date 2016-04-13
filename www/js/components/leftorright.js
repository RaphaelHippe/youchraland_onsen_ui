// var module = ons.bootstrap('app', ['onsen']);
var module = angular.module('app');
module.controller('LeftOrRightCtrl', function($scope) {
  ons.ready(function() {
    // Init code here
    $scope.state = {
      state: 0
    };
    $scope.tapIt = function () {
      if (Math.floor((Math.random() * 10) + 1) % 2 === 0) {
        $scope.state = 1;
      } else {
        $scope.state = 2;
      }
    };
  });
});

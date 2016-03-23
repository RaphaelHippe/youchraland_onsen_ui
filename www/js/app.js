// var module = ons.bootstrap('app', ['onsen']);
var module = angular.module('app', ['onsen']);
module.controller('AppController', function($scope) {});
module.controller('PageController', function($scope) {
  ons.ready(function() {
    // Init code here
  });
});

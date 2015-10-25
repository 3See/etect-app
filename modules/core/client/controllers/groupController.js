'use strict';

angular.module('core').controller('GroupCtrl', function ($scope, $log) {
  $scope.items = [
    'Group 1',
    'Group 2',
    'Control'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});
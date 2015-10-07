'use strict';

angular.module('core').controller('EnrollController', ['$scope', 'Authentication', '$location'
  function ($scope, Authentication, $location) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    if(!Authentication.user) {
    	$location.path('/authentication/signin');
    }
  }
]);
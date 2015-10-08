'use strict';

angular.module('core').controller('EnrollController', ['$scope', 'Authentication', '$state', '$http',
  function ($scope, Authentication, $state, $http) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    if(!Authentication.user) {
    	$location.path('/authentication/signin');
    }
  }
]);
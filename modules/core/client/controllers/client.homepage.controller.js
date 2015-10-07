'use strict';

angular.module('core').controller('ClientHomepageController', ['$scope', 'Authentication', '$location',
  function ($scope, Authentication, $location) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    if(!Authentication.user) {
      $location.path('/authentication/signin');
    }

  }
]);

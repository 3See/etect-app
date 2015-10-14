'use strict';

angular.module('core').controller('StudyInfoController', ['$scope', 'Authentication', '$state',
  function ($scope, Authentication, $state) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    if(!Authentication.user) {
      $state.go('sign-in');
    }

  }
]);


angular.module('core').controller('AccordionCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Group 1',
      content: 'John Doe',
      reader: 'R001',
      complience: '97%'
    },
    {
      title: 'Group 2',
      content: 'John Smith',
      reader: 'R015',
      complience: '93%'
    },
    {
    	title: 'Control',
    	content: 'Jon Jones',
    	reader: 'R054',
      	complience: '85%'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  $scope.redirect = function(){
    $state.go('group-info');
  };
});



angular.module('core').directive('groupTable', function() {
  return { 
    restrict:'E',
    //transclude:true,              // It transcludes the contents of the directive into the template
    //replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'modules/core/views/group-table.client.view.html',
   //scope: {
   //   heading: '@',               // Interpolate the heading attribute onto this scope
   //   isOpen: '=?',
   //   isDisabled: '=?'
   // },
    controller: function($scope) {
      //alert('controller');
    }
  };
});


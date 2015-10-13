/*'use strict';

angular.module('core')
.controller('AccordionController', function ($scope) {
      $scope.oneAtATime = true;

      $scope.groups = [
        {
          title: 'Dynamic Group Header - 1',
          content: 'Dynamic Group Body - 1'
        },
        {
          title: 'Dynamic Group Header - 2',
          content: 'Dynamic Group Body - 2'
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
    })
.directive('groupTable', function () {
    return { //return this as an object
        templateUrl: '../views/group-table.client.view.html'//, //where the html is we are going to use in this tag
    };
});
*/
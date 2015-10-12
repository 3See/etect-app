'use strict';

angular.module('core')
    .directive('groupTable', function () {
        return { //return this as an object
            restrict: 'E',
            templateUrl: '../views/group-table.client.view.html'//, //where the html is we are going to use in this tag
            /*controller: function () {
                this.setHeading = function (element) {
                    this.heading = element;
                };
            },
            link: function (scope, element, attrs, accordionCtrl) {
                accordionCtrl.addGroup(scope);

                scope.$watch('isOpen', function (value) {
                    if (value) {
                        accordionCtrl.closeOthers(scope);
                    }
                });

                scope.toggleOpen = function () {
                    if (!scope.isDisabled) {
                        scope.isOpen = !scope.isOpen;
                    }
                };
            },
            controllerAs: groupCtl //what controller will be called by*/



        };
    });

//OLD CONTROLLER
// Try to fit this functionality into the controller function above.

/*
$scope.oneAtATime = true;

$scope.groups = [
    {
        title: 'Group 1',
        content: 'John Doe'
    },
    {
        title: 'Group 2',
        content: 'John Smith'
    },
    {
        title: 'Control',
        content: 'Jon Jones'
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
};*/
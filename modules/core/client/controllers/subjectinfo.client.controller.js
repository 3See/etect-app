'use strict';


angular.module('core').controller('SubjectInfoController', ['$scope', 'Authentication', '$state', function ($scope) {

    // This provides Authentication context.
    $scope.authentication = Authentication;

    if (!Authentication.user) {
        $state.go('sign-in');
    }

    $scope.info = [{
        fullName: "John Doe",
        patientID: "123456789",
        readerID: "123456789",
        startDate: "01/02/03",
        endDate: "02/03/04",
        address: "123 S Main St, Gainesville, Fl, 21601",
        address2: "5050 W University Ave.PO Box 90909, Gainesville Fl, 32607",
        phone: "813-555-1234",
        phone2: "813-555-4321",
        emergencyContacts: [{name: "Jane Doe", relationship: "Wife", phone: "352-555-5678"}, {
            name: "Jack Doe",
            relationship: "Brother",
            phone: "813-555-3636"
        }]
    }];
    $scope.newItem = "";
    $scope.todos = [];

    $scope.addItem = function () {
        console.log("in add");
        if ($scope.newItem !== "") {
            var addItem = {name: $scope.newItem, done: false};
            $scope.todos.push(addItem);
            $scope.newItem = "";

        }
    };

    $scope.deleteItem = function (index) {
        console.log("in delete");
        $scope.todos.splice(index, 1);
    };

    $scope.completeItem = function (index) {
        console.log("completed item");
        $scope.todos[index].done = true;
    };

    $scope.uncompleteItem = function (index) {
        console.log("uncompleted item");
        $scope.todos[index].done = false;
    };


}]);
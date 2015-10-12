'use strict';

angular.module('core').controller('SubjectInfoController', ['$scope', 'Authentication', '$state',
    function ($scope, Authentication, $state) {

    // This provides Authentication context.
    $scope.authentication = Authentication;

    if (!Authentication.user) {
        $state.go('sign-in');
    }

    $scope.info = [{fullName: "John Doe", 
    patientID:"123456789", 
    readerID:"123456789", 
    startDate:"01/02/03", 
    endDate:"02/03/04", 
    address1:"123 S Main St", 
    city1:"Gainesville", 
    state1:"FL", 
    zip1:"21601", 
    address2:"5050 W University Ave. PO Box 90909", 
    city2:"Gainesville", 
    state2:"FL", 
    zip2:"32607", 
    phone1:"813-555-1234", 
    phone2:"813-555-4321", 
    emergencyContact1:{name:"Jane Doe", relationship:"Wife", phone:"352-555-5678"},
    emergencyContact2:{name:"Jack Doe", relationship:"Brother", phone:"813-555-3636"}}];
    $scope.groups = [{name:"Group 1"}, {name:"Group 2"}, {name:"Group 3"}];
    $scope.readers = [{name:"R15"}, {name:"R17"}, {name:"R18"}];
    $scope.states = [{name:"FL"},{name:"CA"},{name:"NH"}];
    $scope.editBool = false;

    $scope.toggleEdit = function(index) {
    console.log("toggled edit display.");
    $scope.fullName = $scope.info[0].fullName;
    $scope.groupsDrop = $scope.groups[0];
    $scope.readersDrop = $scope.readers[0];

    $scope.startDate = $scope.info[0].startDate;

    $scope.endDate = $scope.info[0].endDate;

    $scope.address1 = $scope.info[0].address1;
    $scope.city1 = $scope.info[0].city1;
    $scope.statesDrop1 = $scope.states[0];
    $scope.zip1 = $scope.info[0].zip1;

    $scope.address2 = $scope.info[0].address2;
    $scope.city2 = $scope.info[0].city2;
    $scope.statesDrop2 = $scope.states[0];
    $scope.zip2 = $scope.info[0].zip2;
    
    $scope.phone1 = $scope.info[0].phone1;    
    $scope.phone2 = $scope.info[0].phone2;

    $scope.emergencyContact1Name = $scope.info[0].emergencyContact1.name;    
    $scope.emergencyContact2Name = $scope.info[0].emergencyContact2.name; 
    $scope.emergencyContact1Relationship = $scope.info[0].emergencyContact1.relationship;
    $scope.emergencyContact2Relationship = $scope.info[0].emergencyContact2.relationship;
    $scope.emergencyContact1Phone = $scope.info[0].emergencyContact1.phone;
    $scope.emergencyContact2Phone = $scope.info[0].emergencyContact2.phone;



    if ($scope.editBool == false) {
      $scope.editBool = true;
    } else {
      $scope.editBool = false;
    }
  }


}]);
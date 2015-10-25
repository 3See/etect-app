'use strict';

angular.module('core').controller('subjectSetupController', ['$scope', 'Authentication', '$state',
  function ($scope, Authentication, $state) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    if(!Authentication.user) {
      $state.go('sign-in');
    }

    $scope.subjectID = "105";
    $scope.phone = "813-555-1234";
    $scope.ReaderID = "10005";
    $scope.startdate = "01/01/1990";
    $scope.enddate = "01/01/2020";

    $scope.ingestions = [
      {
        num: "01",
        date: "01/01/2010 8:06pm"
      },
      {
        num: "02",
        date: "01/02/2010 8:31pm"
      },
      {
        num: "03",
        date: "01/03/2010 8:45pm"
      },
      {
        num: "04",
        date: "01/04/2010 8:12pm"
      },
      {
        num: "05",
        date: "01/05/2010 8:23pm"
      },

      {
        num: "06",
        date: ""
      },
      {
        num: "07",
        date: ""
      }

    ];
    

    $scope.readers = [
      "10001",
      "10002",
      "10003",
      "10004",
      "10005",
      "10006"
    ];
  }
]);




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










angular.module('core').controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
});
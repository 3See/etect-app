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

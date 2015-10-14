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
    template:'<div>\
  <div ng-controller="AccordionCtrl">\
      <script type="text/ng-template" id="group-template.html">\
        <div class="panel {{panelClass || \'panel-default\'}}">\
          <div class="panel-heading">\
            <h4 class="panel-title" style="color:#fa39c3">\
              <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span\
                ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\
            </h4>\
          </div>\
          <div class="panel-collapse collapse" uib-collapse="!isOpen">\
            <div class="panel-body" style="text-align: right" ng-transclude></div>\
          </div>\
        </div>\
      </script>\
      <accordion close-others="oneAtATime">\
        <accordion-group ng-repeat="group in groups">\
            <accordion-heading>\
                {{group.title}}\
\
                <button type="button" class="btn btn-default pull-right studypage" data-toggle="collapse" data-target="#demo1" ui-sref="group-info">\
                    Group Data\
                </button>\
           \
            </accordion-heading>\
              <table class="studyTable">\
                  <tr>\
                      <th>Name</th>\
                      <th>Reader Number</th>\
                      <th>Complience</th>\
                  </tr>\
                  <tr>\
                      <td>{{group.content}}</td>\
                      <td>{{group.reader}}</td>\
                      <td>{{group.complience}}</td>\
                  </tr>\
              </table>\
        </accordion-group>\
      </accordion>\
  </div>\
</div>',
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


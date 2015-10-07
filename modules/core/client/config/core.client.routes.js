'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // Redirect to 404 when route not found
        $urlRouterProvider.otherwise('not-found');

        // Home state routing
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'modules/core/views/home.client.view.html'
            })
            .state('not-found', {
                url: '/not-found',
                templateUrl: 'modules/core/views/404.client.view.html'
            })
            .state('sign-in', {
                url: '/authentication/signin',
                templateUrl: 'modules/users/views/authentication/signin.client.view.html'
            })
            .state('enrollment', {
                url: '/study/enrollment',
                templateUrl: 'modules/core/views/enroll.client.view.html'
            })
            .state('subject-info', {
                url: '/subject-info',
                templateUrl: 'modules/core/views/subjectinfo.client.view.html'
            });
    }
]);

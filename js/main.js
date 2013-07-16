'use strict';

/* App Module */

angular.module('Collade', ['ui.bootstrap.collapse', 'ui.state', 'LoadingIndicator']).
    config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true).hashPrefix('!');

        $urlRouterProvider.otherwise('/');
    }])
    run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);

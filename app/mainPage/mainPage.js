'use strict';
angular.module('myApp.mainPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mainPage', {
            templateUrl: 'mainPage/mainPage.html',
            controller: 'mainPageController'
        });
    }])

    .controller('mainPageController', function($scope, mockStudent) {
        $scope.student = mockStudent;
    });
'use strict';

angular.module('myApp.submitApplicationPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/submitApplication', {
            templateUrl: 'submitApplicationPage/submitApplicationPage.html',
            controller: 'submitApplicationPageController'
        });
    }])

    .controller('submitApplicationPageController', function($scope) {
        $scope.toDoInfo = "Namiastka strony. Zaplanowana treść: formularz do składania wniosków";
    });
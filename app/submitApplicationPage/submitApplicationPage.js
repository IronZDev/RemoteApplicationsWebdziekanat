'use strict';

angular.module('myApp.submitApplicationPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/submitApplication', {
            templateUrl: 'submitApplicationPage/submitApplicationPage.html',
            controller: 'submitApplicationPageController'
        });
    }])

    .controller('submitApplicationPageController', function($scope,proposals) {
        //$scope.toDoInfo = "wdwdwdwNamiastka strony. Zaplanowana treść: formularz do składania wniosków"; 
        $scope.proposals = proposals;
    });
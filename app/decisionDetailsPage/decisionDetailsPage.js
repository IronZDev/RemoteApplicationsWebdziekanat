'use strict';

angular.module('myApp.decisionDetailsPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/decisionDetails', {
            templateUrl: 'decisionDetailsPage/decisionDetailsPage.html',
            controller: 'decisionDetailsPageController'
        });
    }])

    .controller('decisionDetailsPageController', function($scope) {
        $scope.toDoInfo = "Namiastka strony. Zaplanowana treść: szczegóły dotyczącej wydanej decyzji";
    });
'use strict';

angular.module('myApp.availableApplicationsPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/availableApplications', {
            templateUrl: 'availableApplicationsPage/availableApplicationsPage.html',
            controller: 'availableApplicationsPageController'
        });
    }])

    .controller('availableApplicationsPageController', function($scope) {
        $scope.toDoInfo = "Namiastka strony. Zaplanowana treść: lista wniosków możliwych do złożenia w dziekanacie";
    });
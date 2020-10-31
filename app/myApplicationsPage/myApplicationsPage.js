'use strict';

angular.module('myApp.myApplicationsPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/myApplications', {
            templateUrl: 'myApplicationsPage/myApplicationsPage.html',
            controller: 'myApplicationsPageController'
        });
    }])

    .controller('myApplicationsPageController', function($scope) {
        $scope.toDoInfo = "Namiastka strony. Zaplanowa treść: lista wniosków, które student złożył, wraz z informacją o ich statusie";
    });
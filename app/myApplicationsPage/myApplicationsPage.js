'use strict';

angular.module('myApp.myApplicationsPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/myApplications', {
            templateUrl: 'myApplicationsPage/myApplicationsPage.html',
            controller: 'myApplicationsPageController'
        });
    }])

    .controller('myApplicationsPageController', function($scope, $http) {
        $scope.toDoInfo = "Namiastka strony. Zaplanowa treść: lista wniosków, które student złożył, wraz z informacją o ich statusie";
        $scope.submittedApplications = null;
        $http.get('http://localhost:9000/proposals').then(function (response) {
            if (response.data)
                console.log("Data loaded properly");
                $scope.submittedApplications = response.data;
        }, function (response) {
            console.log("Something went wrong");
        });
    });
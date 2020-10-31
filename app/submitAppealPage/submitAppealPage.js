'use strict';

angular.module('myApp.submitAppealPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/submitAppeal', {
            templateUrl: 'submitAppealPage/submitAppealPage.html',
            controller: 'submitAppealPageController'
        });
    }])

    .controller('submitAppealPageController', function($scope) {
        $scope.toDoInfo = "Namiastka strony. Zaplanowana treść: formularz złożenia odwołania od decyzji";
    });
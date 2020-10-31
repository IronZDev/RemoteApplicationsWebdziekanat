'use strict';

angular.module('myApp.loginPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'loginPage/loginPage.html',
            controller: 'loginPageController'
        });
    }])

    .controller('loginPageController', function($scope) {
        $scope.toDoInfo = "Namiastka strony. Zaplanowana treść: strona logowania";
    });
'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  //'myApp.view1',
  //'myApp.view2',
  'myApp.loginPage',
  'myApp.mainPage',
  'myApp.availableApplicationsPage',
  'myApp.myApplicationsPage',
  'myApp.submitApplicationPage',
  'myApp.decisionDetailsPage',
  'myApp.submitAppealPage',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/mainPage'});
}])

.controller('MainController', function($scope) {
  $scope.loginLabel = "Logowanie";
  $scope.mainPageLabel = "Strona główna";
  $scope.availableApplicationsLabel = "Dostępne wnioski";
  $scope.myApplicationsLabel = "Złożone wnioski";
  $scope.submitApplicationLabel = "Złóż wniosek";
  $scope.decisionDetailsLabel = "Szczegóły decyzji";
  $scope.submitAppealLabel = "Złóż odwołanie";
  $scope.logoutLabel = "Wyloguj";
  $scope.footerNote = "Programowanie zespołowe - Grupa B";
});

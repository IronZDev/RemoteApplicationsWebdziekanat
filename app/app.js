'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  //'myApp.view1',
  //'myApp.view2',
  'myApp.loginPage',
  'myApp.mainPage',
  'myApp.myApplicationsPage',
  'myApp.submitApplicationPage',
  'myApp.version',
  'pascalprecht.translate',
  'myApp.dataService',
  'naif.base64',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', '$translateProvider', function($locationProvider, $routeProvider, $translateProvider) {

  var translationsEN = {
    LOGIN: 'Login', 
    MAIN_PAGE: 'Main Page',
    AVAILABLE_APPLICATIONS: 'Available Applications',
    SUBMITED_APPLICATIONS:'Submited applications', 
    SUBMIT_AN_APPLICATION:'Submit an application',
    DETAILS_OF_DECISIONS:'Details of decision', 
    SUBMIT_AN_APPEAL: 'Submit an appeal', 
    LOG_OUT:"Log out", 
    FOOTER_NOTE:"Team programming - Team B", 

    WELCOME_BACK:"Welcome back",
    NAME:'Name:', 
    STUDENT_ID:'Student ID:',
    DEPARTMENT:'Department:',
    CURRENT_SEMESTER: 'Current semester:',
    AVERAGE_GRADE: 'Average grade:',
    GENERAL_INFORMATION: 'General information',

    DETAILED_INFORMATION: 'Detailed information',
    STUDIES_DETAILS: 'Studies details:',
    COURSE:'Course:',
    SPECIALITY:'Specialty:',
    TYP_OF_STUDIES:'Type of studies:',
    LENGTH_OF_STUDIES:'Length of studies:',
    CURRENT_DATA:'Current data:',
    CURRENT_STUDY_SEMESTER:"Current semester:",
    CURRENT_YEAR:'Current year:',
    ECTS_GAINED:'ECTS gained:',
    STUDENT_STATUS:'Student status:',

    SUBMIT:'Submit', 
    AVAILABLE_PROPOSALS:'Available proposals',

    SUBMITED_PROPOSALS: 'Submited proposals',
    SUBMIT_APPEAL: 'Submit appeal'
  };
   
  var translationsPL= {
    LOGIN: 'Login', 
    MAIN_PAGE: 'Strona Główna',
    AVAILABLE_APPLICATIONS: 'Dostępne wnioski',
    SUBMITED_APPLICATIONS:'Złożone wnioski', 
    SUBMIT_AN_APPLICATION:'Złóż wniosek',
    DETAILS_OF_DECISIONS:'Szczegóły decyzji', 
    SUBMIT_AN_APPEAL: 'Złóż odwołanie', 
    LOG_OUT:'Wyloguj', 
    FOOTER_NOTE:'Programowanie zespołowe - Grupa B', 

    WELCOME_BACK:'Witaj z powrotem',
    NAME:'Imię:',
    STUDENT_ID:'ID Studenta:', 
    DEPARTMENT:'Wydział:',
    CURRENT_SEMESTER:'Obecny semestr:',
    AVERAGE_GRADE:'Średnia ocen:',
    GENERAL_INFORMATION:'Informacje ogólne',

    DETAILED_INFORMATION:'Informacje szczegółowe',
    STUDIES_DETAILS:'Szczegóły studiów',
    COURSE:'Kurs',
    SPECIALITY:'Specjalność',
    TYP_OF_STUDIES:'Typ studiów',
    LENGTH_OF_STUDIES:'Długość studiów',
    CURRENT_DATA:'Obecne dane:',
    CURRENT_STUDY_SEMESTER:"Obecny semestr:",
    CURRENT_YEAR:'Obecny rok:',
    ECTS_GAINED:'Zdobyte punkty ECTS:',
    STUDENT_STATUS:'Status studenta:', 

    SUBMIT:'Złóż',
    AVAILABLE_PROPOSALS:'Dostępne wnioski',
    
    SUBMITED_PROPOSALS: 'Złożone wnioski',
    SUBMIT_APPEAL: 'Złóż odwołanie'


  };

  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('pl', translationsPL);
  $translateProvider.fallbackLanguage('en'); 
  $translateProvider.preferredLanguage('pl');

  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/mainPage'});
  
}])
.controller('MainController', ['$scope', '$translate', function ($scope, $translate) {
  $scope.currentLanguage = 'pl'
  $scope.changeLanguage = function () {
    if ($scope.currentLanguage === 'pl') {
      $scope.currentLanguage = 'en';
      $('.flag-icon').removeClass('flag-icon-gb').addClass('flag-icon-pl');
    } else {
      $scope.currentLanguage = 'pl';
      $('.flag-icon').removeClass('flag-icon-pl').addClass('flag-icon-gb');
    }
    $translate.use($scope.currentLanguage);
  };
  $scope.loginLabel = 'Login';
  $scope.mainPageLabel = "Strona główna";
  $scope.availableApplicationsLabel = "Dostępne wnioski";
  $scope.myApplicationsLabel = "Złożone wnioski";
  $scope.submitApplicationLabel = "Złóż wniosek";
  $scope.decisionDetailsLabel = "Szczegóły decyzji";
  $scope.submitAppealLabel = "Złóż odwołanie";
  $scope.logoutLabel = "Wyloguj";
  $scope.footerNote = "Programowanie zespołowe - Grupa B";

  $scope.navElementChange = function($event) {
    var navItems = document.querySelectorAll('#navbarItems li');
    for (var i=0; i<navItems.length; i++) {
      console.log(navItems[i])
      //Remove old active
      if (navItems[i].classList.contains('active')) {
        navItems[i].classList.remove('active');
      }
      //Add new active
      if (navItems[i].contains(angular.element($event.target)[0])) {
        navItems[i].classList.add('active');
      }
    }
  };
}]);
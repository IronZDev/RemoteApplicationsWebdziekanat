'use strict';

angular.module('myApp.mainPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/mainPage', {
            templateUrl: 'mainPage/mainPage.html',
            controller: 'mainPageController'
        });
    }])

    .controller('mainPageController', function($scope) {
        $scope.student = {
            name: "Maciej Stokfisz",
            ID: 234008,
            department: "WEEiA",
            semester: 2,
            course: "Informatics",
            specialty: "Distributed systems and mobile platforms",
            studiesType: "Full-time",
            lengthOfStudies: 1.5,
            currentSemester: "2020/2021 Winter",
            currentYear: 1,
            status: "Active, full-registration",
            grades: [
                {
                    course: "Techniki kompilacji",
                    grade: 4.5,
                    ects: 10
                },
                {
                    course: "Programowanie Zespołowe",
                    grade: 4,
                    ects: 10
                },
                {
                    course: "PBL",
                    grade: 5,
                    ects: 10
                }
            ],
            getAverageGrade: function() {
                let sumOfGradeValues = 0;
                let sumOfEcts = 0;
                for (let grade of this.grades) {
                    sumOfEcts += grade.ects;
                    sumOfGradeValues += grade.grade * grade.ects;
                }
                return (sumOfGradeValues/sumOfEcts).toFixed(2);
            },
            getAcquiredEcts: function () {
                let sumOfEcts = 0;
                for (let grade of this.grades) {
                    if (grade.grade > 2)
                        sumOfEcts += grade.ects;
                }
                return sumOfEcts;
            },
            getAllEcts: function () {
                let sumOfEcts = 0;
                for (let grade of this.grades)
                    sumOfEcts += grade.ects;
                return sumOfEcts;
            }
        };
    });
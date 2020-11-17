'use strict';
angular.module('myApp.dataService', [])

    .factory('mockStudent', function() {
        return {
            name: "Maciej Stokfisz",
            ID: 234008,
            department: "WEEiA",
            semester: 2,
            course: "Informatyka",
            specialty: "Systemy rozproszone i platformy mobilne",
            studiesType: "Pełno-wymiarowe",
            lengthOfStudies: 1.5,
            currentSemester: "2020/2021 Zima",
            currentYear: 1,
            status: "Aktywny,pełna rejestracja",
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
            getAverageGrade: function () {
                let sumOfGradeValues = 0;
                let sumOfEcts = 0;
                for (let grade of this.grades) {
                    sumOfEcts += grade.ects;
                    sumOfGradeValues += grade.grade * grade.ects;
                }
                return (sumOfGradeValues / sumOfEcts).toFixed(2);
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
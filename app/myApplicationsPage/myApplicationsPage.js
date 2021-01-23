'use strict';

angular.module('myApp.myApplicationsPage', ['ngRoute', 'naif.base64'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/myApplications', {
            templateUrl: 'myApplicationsPage/myApplicationsPage.html',
            controller: 'myApplicationsPageController'
        });
    }])

    .controller('myApplicationsPageController', function($scope, $uibModal, $http) {
        $scope.toDoInfo = "Namiastka strony. Zaplanowa treść: lista wniosków, które student złożył, wraz z informacją o ich statusie";
        $scope.submittedApplications = null;
        $http.get('http://localhost:9000/proposals').then(function (response) {
            if (response.data)
                console.log("Data loaded properly");
                $scope.submittedApplications = response.data;
        }, function (response) {
            console.log("Something went wrong");
        });
        $scope.openModal = function(application) {
            let modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'appealModalLabel',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myApplicationsPage/appealModalContent.html',
                controller: 'submitAppealModalController',
                controllerAs: '$scope',
                size: 'lg',
                resolve: {
                    application: function () {
                        return application;
                    },
                }
            });
            // Transform result from modal
            modalInstance.result.then(function(response){
                $scope.result = `${response} button hitted`;
            });
        }
        $scope.openCorrectModal = function(application) {
            let modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'correctModalLabel',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myApplicationsPage/correctModalContent.html',
                controller: 'submitCorrectModalController',
                controllerAs: '$scope',
                size: 'lg',
                resolve: {
                    application: function () {
                        return application;
                    },
                }
            });
            // Transform result from modal
            modalInstance.result.then(function(response){
                $scope.result = `${response} button hitted`;
            });
        }
    })
    .controller('submitCorrectModalController', function ($scope, $uibModalInstance, application, $http) {
        $scope.application = application;
        $scope.currentDate = (new Date).toLocaleDateString();
        $scope.justification = application.justification;
        $scope.place = "Łódź";
        $scope.myfile = null;

        $scope.submit = function () {
            //{...}
            //alert("You clicked the submit button.");
            var data = {
                 name: application.name,
                 album: application.album,
                 course: application.course,
                 year: application.year,
                 recipient: application.recipient,
                 proposal: application.proposal,
                 date: $scope.currentDate,
                 city: $scope.place,
                 justification: $scope.justification,
                 attachment: $scope.myfile,
                 status: "WAITING_FOR_INITIAL_REVIEW",
                 status_justification: "",
                 status_last_update: $scope.currentDate
            };
            var uri_to_update = 'http://localhost:9000/proposals/' + application.id;
            console.log(uri_to_update);
            console.log(application);
            $http.put(uri_to_update, JSON.stringify(data)).then(function (response) {
                 if (response.data)
                     alert("Proposal modified successfully");
            }, function (response) {
                 alert("Something went wrong");
                 $scope.msg = "Service not Exists";
                 $scope.statusval = response.status;
                 $scope.statustext = response.statusText;
                 $scope.headers = response.headers();
            });
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        }
    })
    .controller('submitAppealModalController', function ($scope, $uibModalInstance, application, $http) {
        $scope.application = application;
        $scope.currentDate = (new Date).toLocaleDateString();
        $scope.justification = "";
        $scope.place = "Łódź";

        $scope.submit = function () {
            //{...}
            //alert("You clicked the submit button.");
            // var data = {
            //     name: student.name,
            //     album: student.ID,
            //     course: student.course,
            //     year: student.currentYear,
            //     recipient: $scope.sendTo,
            //     proposal: currentProposal.name,
            //     date: $scope.currentDate,
            //     city: $scope.place,
            //     justification: $scope.justification,
            //     attachment: $scope.myfile,
            //     status: "WAITING_FOR_INITIAL_REVIEW",
            //     status_justification: "",
            //     status_last_update: $scope.currentDate
            // };
            // $http.post('http://localhost:9000/proposals', JSON.stringify(data)).then(function (response) {
            //     if (response.data)
            //         alert("Proposal saved successfully");
            // }, function (response) {
            //     alert("Something went wrong");
            //     $scope.msg = "Service not Exists";
            //     $scope.statusval = response.status;
            //     $scope.statustext = response.statusText;
            //     $scope.headers = response.headers();
            // });

            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        }
    })
    .directive('tooltip', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                $(element).tooltip();
            }
        };
    });
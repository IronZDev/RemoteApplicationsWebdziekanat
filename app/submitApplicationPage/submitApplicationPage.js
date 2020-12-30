'use strict';

angular.module('myApp.submitApplicationPage', ['ngRoute','ui.bootstrap', 'naif.base64'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/submitApplication', {
            templateUrl: 'submitApplicationPage/submitApplicationPage.html',
            controller: 'submitApplicationPageController'
        });
    }])

    .controller('submitApplicationPageController', function($scope, $uibModal, proposals, mockStudent, ) {
        $scope.proposals = proposals;
        $scope.openModal = function(proposal) {
            let modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'applicationModalLabel',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'submitApplicationPage/applicationModalContent.html',
                controller: 'submitApplicationModalController',
                controllerAs: '$scope',
                size: 'lg',
                resolve: {
                    currentProposal: function () {
                        return proposal;
                    },
                    student: function () {
                        return mockStudent;
                    }
                }
            });
            // Transform result from modal
            modalInstance.result.then(function(response){
                $scope.result = `${response} button hitted`;
            });
        }
    })

    .controller('submitApplicationModalController', function ($scope, $uibModalInstance, currentProposal, student, $http) {
        $scope.student = student;
        $scope.currentProposal = currentProposal;
        $scope.currentDate = (new Date).toLocaleDateString();
        $scope.sendTo = "Prodziekan ds. studiów stacjonarnych\n" +
            "Wydziału Elektrotechniki, Elektroniki, Informatyki i Automatyki\n" +
            "Politechniki Łódzkiej";
        $scope.justification = "";
        $scope.place = "Łódź";
        $scope.myfile = null;

        $scope.submit = function () {
            //{...}
            //alert("You clicked the submit button.");
            var data = {
                name: student.name,
                album: student.ID,
                course: student.course,
                year: student.currentYear,
                recipient: $scope.sendTo,
                proposal: currentProposal.name,
                date: $scope.currentDate,
                city: $scope.place,
                justification: $scope.justification,
                attachment: $scope.myfile
            };
            $http.post('http://localhost:9000/proposals', JSON.stringify(data)).then(function (response) {
                if (response.data)
                    alert("Proposal saved successfully");
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
            //{...}
            alert("You clicked the cancel button.");
            $uibModalInstance.dismiss('cancel');
        };
    });

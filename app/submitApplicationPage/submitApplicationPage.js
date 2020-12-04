'use strict';

angular.module('myApp.submitApplicationPage', ['ngRoute','ui.bootstrap'])

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

    .controller('submitApplicationModalController', function ($scope, $uibModalInstance, currentProposal, student) {
        $scope.student = student;
        $scope.currentProposal = currentProposal;
        $scope.currentDate = (new Date).toLocaleDateString();

        $scope.submit = function () {
            //{...}
            alert("You clicked the submit button.");
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            //{...}
            alert("You clicked the cancel button.");
            $uibModalInstance.dismiss('cancel');
        };
    });

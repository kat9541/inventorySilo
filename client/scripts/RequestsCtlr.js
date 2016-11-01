angular.module('Inventory')
    .service('DataService', function () {})
    .controller('RequestsCtlr', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

        $scope.requests = [];

        dataService.getRequests()
            .then(function successCallback(response) {

                $scope.requests = response.data.data;

            }, function errorCallback(response) {
               alert("Please help");
            });


    }]);
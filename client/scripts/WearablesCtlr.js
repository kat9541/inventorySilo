angular.module('Inventory')
    .service('DataService', function () {})
    .controller('WearablesCtlr', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

        $scope.wearables = [];

        dataService.getWearables()
            .then(function successCallback(response) {

                $scope.wearables = response.data.data;

            }, function errorCallback(response) {
                alert("Please help");
            });

    }]);
angular.module('Inventory')
    .service('DataService', function () {})
    .controller('PartsCtlr', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {
        
            $scope.parts = [];

            dataService.getParts()
                .then(function successCallback(response) {

                        $scope.parts = response.data.data;

                }, function errorCallback(response) {
                        alert("Please help");
                });
    }]);
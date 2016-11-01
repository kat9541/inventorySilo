angular.module('Inventory')
    .service('DataService', function () {})
    .controller('OrdersCtlr', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

        $scope.orders = [];

        dataService.getOrders()
            .then(function successCallback(response) {

            }, function errorCallback(response) {
               alert("Please help");
            });
    }]);
angular.module('Inventory')
    .service('DataService', function () {})
    .controller('RequestsCtlr', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

        console.log('RequestsCtlr initialized');
        console.log($location.path());

    }]);
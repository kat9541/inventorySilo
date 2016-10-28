angular.module('Inventory')
    .service('DataService', function () {})
    .controller('WearablesCtlr', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

        console.log('WearablesCtlr initialized');
        console.log($location.path());

    }]);
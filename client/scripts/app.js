var app = angular.module('Inventory', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/addWearable', {
            templateUrl: 'views/addWearable.html',
            controller: 'InventoryMgmtCtlr'
        })
        .when('/wearables', {
            templateUrl: 'views/wearables.html',
            controller: 'InventoryMgmtCtlr'
        })
        .otherwise({ redirectTo: '/wearables'});
}]);
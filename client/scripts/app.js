var app = angular.module('Inventory', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/addWearable', {
            templateUrl: 'views/addWearable.html',
            controller: 'InventoryMgmtCtlr'
        })
        .when('/wearables', {
            templateUrl: 'views/wearabledashboard.html',
            controller: 'WearablesCtlr'
        })
        .when('/parts', {
            templateUrl: 'views/partdashboard.html',
            controller: 'PartsCtlr'
        })
        .when('/requests', {
            templateUrl: 'views/requestdashboard.html',
            controller: 'RequestsCtlr'
        })
        .when('/orders', {
            templateUrl: 'views/orderdashboard.html',
            controller: 'OrdersCtlr'
        })
        .otherwise({ redirectTo: '/wearables'});
}]);
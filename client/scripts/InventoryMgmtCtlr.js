angular.module('Inventory')
    .service('DataService', function () {})
    .controller('InventoryMgmtCtlr', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {
    
    console.log("InventoryMgmtCtlr initialized");
    console.log($location.path());

    $scope.wearables = null;
    $scope.newWearable = {};

    

    dataService.getWearables()
        .then(function successCallback(response) {
            $scope.wearables = response.data.data;
            //$scope.wearables.concat(response.data);
    
        }, function errorCallback(response) {
            alert("Please help");
        });


    $scope.addWearable = function() {

        console.log($scope.newWearable);

        dataService.addWearable($scope.newWearable)
            .then(function successCallback(response) {

                alert('Success: Wearable added');
            }, function errorCallback(response) {
                alert('Failure: Wearable was not added');
            });

    };

    $scope.deleteWearable = function(id, index) {

        console.log("id = " + id);
        console.log("index = " + index);

        dataService.deleteWearable(id)
            .then(function successCallback(response) {
                alert('Wearable deleted');
                $scope.wearables.splice(0, id);
            }, function errorCallback(response) {

            });
    };

}]);
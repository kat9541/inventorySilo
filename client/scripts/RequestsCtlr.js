angular.module('Inventory')
    .service('DataService', function () {})
    .controller('RequestsCtlr', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

        $('#requestsItem').addClass("active");
        var elm = $('span');
        elm.addClass("sr-only");
        elm.html = '(current)';
        $('#requestsLink').append(elm);
        $('#addNew').append(' Request');

        $scope.requests = [];

        dataService.getRequests()
            .then(function successCallback(response) {

                $scope.requests = response.data.data;

            }, function errorCallback(response) {
               alert("Please help");
            });


    }]);
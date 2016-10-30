angular.module('Inventory')
    .service('DataService', function () {})
    .controller('PartsCtlr', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

            $('#partsItem').addClass("active");
            var elm = $('span');
            elm.addClass("sr-only");
            elm.html = '(current)';
            $('#partsLink').append(elm);
            $('#addNew').append(' Part');
    }]);
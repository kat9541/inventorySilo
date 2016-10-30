angular.module('Inventory')
    .service('DataService', function () {})
    .controller('WearablesCtlr', ['$scope', 'dataService', '$location', function ($scope, dataService, $location) {

        $('#productsItem').addClass("active");
        var elm = $('span');
        elm.addClass("sr-only");
        elm.html = '(current)';
        $('#productsLink').append(elm);
        $('#addNew').append(' Wearable');
    }]);
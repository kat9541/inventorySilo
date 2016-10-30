angular.module('Inventory').service('dataService', ['$http', function ($http) {

    var urlBaseWearables = '/api/wearables';
    var urlBaseParts = '/api/parts';

    this.addWearable = function (wearable) {
        return $http.post(urlBaseWearables, wearable);
    };
    
    this.getWearables = function () {
        return $http.get('/api/allwearables');
    };

    this.getWearableById = function (id) {
        return $http.get(urlBaseWearables + '/' + id);
    };

    this.deleteWearable = function (id) {
      return $http.delete(urlBaseWearables + '/' + id);
    };

    // Not Implemented Yet???

     this.getParts = function () {
        return $http.get('/api/allparts');
     };

     this.getPartById = function (id) {
        return $http.get(urlBaseParts + '/' + id);
     };

     this.getPartsExpenses = function () {
        return $http.get(urlBaseParts + expenses);
     };



}]);
angular.module('Inventory').service('dataService', ['$http', function ($http) {

    var urlBase = '/api/wearables';

    this.addWearable = function (wearable) {
        return $http.post(urlBase, wearable);
    };
    
    this.getWearables = function () {
        return $http.get('/api/allwearables');
    };

    this.getWearable = function (id) {

        var req = {
            method: 'GET',
            url: 'http://129.21.208.176:3000/api/wearable/ + id'
        };
        return $http.get(urlBase + '/' + id);
        //return $http.get(req)
    };

    this.deleteWearable = function (id) {
      return $http.delete(urlBase + '/' + id);
    };
}]);
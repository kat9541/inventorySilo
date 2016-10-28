'use strict'

angular.module('Inventory').directive('navbar', function () {
   return {
       restrict: 'E',
       templateUrl: 'views/navbar.html'
   };
});
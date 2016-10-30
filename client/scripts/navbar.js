'use strict'

angular.module('Inventory').directive('navbar', function () {
   return {
       restrict: 'E',
       transclude: true,
       templateUrl: 'views/navbar.html',
       controller: 'NavbarCtlr.js'
   };
});
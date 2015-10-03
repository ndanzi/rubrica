'use strict';

/**
 * @ngdoc function
 * @name rubricaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rubricaApp
 */
angular.module('rubricaApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.$location = $location;
    $scope.ordine = ['cognome', 'gruppo'];
    $scope.perGruppo = false;
    
    $scope.toggleOrdine = function() {
      if($scope.perGruppo) {
        $scope.ordine = ['gruppo', 'cognome'];
      } else {
        $scope.ordine = ['cognome', 'gruppo'];
      }
    }

  }]);

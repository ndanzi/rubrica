'use strict';

/**
 * @ngdoc function
 * @name rubricaApp.controller:ContattiCtrl
 * @description
 * # ContattiCtrl
 * Controller of the rubricaApp
 */
angular.module('rubricaApp')
  .controller('ContattiCtrl', ['$scope', 'database', function ($scope, database) {
    $scope.listaContatti = [];
    database.listaContatti().success(function(data) {
      $scope.listaContatti = data;

    });

  }]);

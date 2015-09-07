'use strict';

/**
 * @ngdoc function
 * @name rubricaApp.controller:ContattiAdministratorCtrl
 * @description
 * # ContattiAdministratorCtrl
 * Controller of the rubricaApp
 */
angular.module('rubricaApp')
  .controller('ContattiAdministratorCtrl', ['$scope', 'database', function ($scope, database) {
    $scope.listaContatti = [];
    database.listaContatti().success(function(data) {
      $scope.listaContatti = data;

    });

  }]);

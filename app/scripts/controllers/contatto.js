'use strict';

/**
 * @ngdoc function
 * @name rubricaApp.controller:ContattoCtrl
 * @description
 * # ContattoCtrl
 * Controller of the rubricaApp
 */
angular.module('rubricaApp')
  .controller('ContattoCtrl', ['$scope', 'database', '$routeParams', '$location', function ($scope, database, $routeParams, $location) {

      $scope.contatto = {};
      var id = $routeParams.id;
      database.contatto(id).success(function(data) {
        $scope.contatto = data;
      })


  }]);

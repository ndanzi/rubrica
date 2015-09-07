'use strict';

/**
 * @ngdoc function
 * @name rubricaApp.controller:ContattoAdministratorCtrl
 * @description
 * # ContattoAdministratorCtrl
 * Controller of the rubricaApp
 */
angular.module('rubricaApp')
  .controller('ContattoAdministratorCtrl', ['$scope', 'database', '$routeParams', '$location', function ($scope, database, $routeParams, $location) {

    $scope.contatto = {};
    var id = $routeParams.id;
    database.contatto(id).success(function(data) {
      $scope.contatto = data;
    })

    $scope.eliminaContatto = function() {
      database.eliminaContatto(id).success(function(data) {
        if(data == 1) {
          console.log('contatto eliminato!');
          $location.path('/contatti');
          Materialize.toast('Contatto eliminato con successo!', 4000);
        } else {
          console.log('errore!', data);
          Materialize.toast('C\'è stato un errore di comunicazione con il database!', 4000);
        }

      })
    }

  }]);

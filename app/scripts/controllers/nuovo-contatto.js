'use strict';

/**
 * @ngdoc function
 * @name rubricaApp.controller:NuovoContattoCtrl
 * @description
 * # NuovoContattoCtrl
 * Controller of the rubricaApp
 */
angular.module('rubricaApp')
  .controller('NuovoContattoCtrl', ['$scope', 'database', '$location', '$timeout', function ($scope, database, $location, $timeout) {
      $scope.contatto = {};

      $scope.listaGruppi = [];
      database.listaGruppi().success(function(data) {
        $scope.listaGruppi = data;

      });


      $scope.submitForm = function(isValid) {
        if(isValid) {
          database.nuovoContatto($scope.contatto)
            .success(function(data) {
              if(data == 1) {
                console.log('contatto inserito!');
                $location.path('/contatti');
                Materialize.toast('Contatto inserito correttamente!', 4000);
              } else {
                console.log('errore!', data);
                Materialize.toast('C\'è stato un errore di comunicazione con il database!', 4000);
              }

            })
            .error(function(e) {
              console.log('errore', e);
            });
        }

      }

  }]);

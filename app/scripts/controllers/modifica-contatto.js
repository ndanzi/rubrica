'use strict';

/**
 * @ngdoc function
 * @name rubricaApp.controller:ModificaContattoCtrl
 * @description
 * # ModificaContattoCtrl
 * Controller of the rubricaApp
 */
angular.module('rubricaApp')
  .controller('ModificaContattoCtrl', ['$scope', 'database', '$routeParams', '$location', function ($scope, database, $routeParams, $location) {

    $scope.contatto = {};
    var id = $routeParams.id;
    database.contatto(id).success(function(data) {
      $scope.contatto = data;
    })

    $scope.listaGruppi = [];
    database.listaGruppi().success(function(data) {
      $scope.listaGruppi = data;

    });

    $scope.submitForm = function(isValid) {
      if(isValid) {
        database.modificaContatto($scope.contatto)
          .success(function(data) {
            if(data == 1) {
              console.log('contatto modificato!');
              $location.path('/contatto/'+$scope.contatto.id);
              Materialize.toast('Contatto modificato correttamente!', 4000);
            } else {
              console.log('errore', data);
              Materialize.toast('C\'è stato un errore di comunicazione con il database!', 4000);
            }

          })
          .error(function(e) {
            console.log('errore', e);
          });
      } else {
        console.log('non valido!');
      }

    }

  }]);

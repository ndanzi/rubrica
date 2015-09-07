'use strict';

/**
 * @ngdoc service
 * @name rubricaApp.contatti
 * @description
 * # contatti
 * Factory in the rubricaApp.
 */
angular.module('rubricaApp')
  .factory('database', ['$http', function ($http) {
    // Service logic
    // ...

    var base = 'http://192.168.1.104/rubrica/DBMS/';
    // Public API here
    return {
      listaContatti: function () {
        return  $http.get(base+'lista-contatti.php');
      },
      contatto: function(identifier) {
        return $http.get(base+'contatto.php', {params: {id: identifier}});
      },
      nuovoContatto: function(contatto) {
        return $http({
          method: 'post',
          url: base+'nuovo-contatto.php',
          data: $.param(contatto),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
        })
      },
      eliminaContatto: function(contatto) {
        return $http({
          method: 'post',
          url: base+'elimina-contatto.php',
          data: $.param({'id': contatto}),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
        })
      },
      modificaContatto: function(contatto) {
        return $http({
          method: 'post',
          url: base+'modifica-contatto.php',
          data: $.param(contatto),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
        })
      },
      listaGruppi: function () {
        return  $http.get(base+'lista-gruppi.php');
      }
    };

  }]);

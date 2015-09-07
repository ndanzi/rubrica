'use strict';

/**
 * @ngdoc overview
 * @name rubricaApp
 * @description
 * # rubricaApp
 *
 * Main module of the application.
 */
angular
  .module('rubricaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.materialize',
        'ngMdIcons',
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/contatti.html',
            controller: 'ContattiCtrl',
            controllerAs: 'contatti'
        })
      .when('/contatto/:id', {
        templateUrl: 'views/contatto.html',
        controller: 'ContattoCtrl',
        controllerAs: 'contatto'
      })

      .when('/nuovo-contatto', {
        templateUrl: 'views/nuovo-contatto.html',
        controller: 'NuovoContattoCtrl',
        controllerAs: 'nuovoContatto'
      })
      .when('/modifica-contatto/:id', {
        templateUrl: 'views/modifica-contatto.html',
        controller: 'ModificaContattoCtrl',
        controllerAs: 'modificaContatto'
      })
      .when('/contatti-administrator', {
        templateUrl: 'views/contatti-administrator.html',
        controller: 'ContattiAdministratorCtrl',
        controllerAs: 'contattiAdministrator'
      })
      .when('/contatto-administrator/:id', {
        templateUrl: 'views/contatto-administrator.html',
        controller: 'ContattoAdministratorCtrl',
        controllerAs: 'contattoAdministrator'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

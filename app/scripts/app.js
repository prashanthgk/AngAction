'use strict';

/**
 * @ngdoc overview
 * @name angelloApp
 * @description
 * # angelloApp
 *
 * Main module of the application.
 */
angular
  .module('angelloApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
       .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Storyboard', {
        templateUrl: 'views/storyboard.html',
        controller: 'StoryboardCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

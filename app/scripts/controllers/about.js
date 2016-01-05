'use strict';

/**
 * @ngdoc function
 * @name angelloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angelloApp
 */
angular.module('angelloApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

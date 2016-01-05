'use strict';

/**
 * @ngdoc function
 * @name angelloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angelloApp
 */
angular.module('angelloApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

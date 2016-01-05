'use strict';

/**
 * @ngdoc function
 * @name angelloApp.controller:StoryboardCtrl
 * @description
 * # StoryboardCtrl
 * Controller of the angelloApp
 */
angular.module('angelloApp')
  .controller('StoryboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
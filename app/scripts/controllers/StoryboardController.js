'use strict';

/**
 * @ngdoc function
 * @name angelloApp.controller:StoryboardCtrl
 * @description
 * # StoryboardCtrl
 * Controller of the angelloApp
 */
angular.module('angelloApp')
    .controller('StoryboardCtrl',
        function($scope) {
         //   var storyboard = this;

          /*
            $scope.stories = [{
                "assignee": "1",
                "criteria": "It tests!",
                "description": "This is a test",
                "id": "1",
                "reporter": "2",
                "status": "To Do",
                "title": "First Story",
                "type": "Spike"
            }, {
                "assignee": "2",
                "criteria": "It works!",
                "description": "testing something",
                "id": "2",
                "reporter": "1",
                "status": "In Progress",
                "title": "Second Story",
                "type": "Enhancement"
               }];

           */

            $scope.statuses = [{
                name: 'To Do'
            }, {
                name: 'In Progress'
            }, {
                name: 'Code Review'
            }, {
                name: 'QA Review'
            }, {
                name: 'Verified'
            }];
        });

'use strict';

/**
 * @ngdoc function
 * @name angelloApp.controller:StoryboardCtrl
 * @description
 * # StoryboardCtrl
 * Controller of the angelloApp
 */
angular.module('angelloApp')
    .controller('StoryboardCtrl', function($scope, StoryboardRepoService) {
            //   var storyboard = this;


            $scope.currentStory = null;
            $scope.editedStory = {};
            $scope.setCurrentStory = function(story) {
                $scope.currentStory = story;
                $scope.editedStory = angular.copy($scope.currentStory);
            };

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


           $scope.stories = StoryboardRepoService.loadModel();

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

            $scope.storyTypes = [{
                name: 'Feature'
            }, {
                name: 'Enhancement'
            }, {
                name: 'Bug'
            }, {
                name: 'Spike'
            }];


            $scope.UpdateStory = function(story) {
                var index = -1;
                for (var i = 0; i < $scope.stories.length; i++) {
                    if (parseInt(story.id) === parseInt($scope.stories[i].id)) {
                        index = i;
                        break;
                    }
                }
                if (story.id) {
                    $scope.stories[index] = angular.copy(story);
                } else {
                    $scope.stories.push(story);
                    $scope.editedStory.id = $scope.stories.length;

                }
                StoryboardRepoService.saveModel($scope.stories);
                $scope.currentStory = null;
            };

            $scope.CancelStory = function() {
                $scope.currentStory = null;
                $scope.editedStory = {};
            };

            $scope.AddStory = function() {
                $scope.currentStory = {};
            };

            $scope.deleteStory = function(story) {
                _.remove($scope.stories, function(list) {
                    return list.id === story.id;
                });
                StoryboardRepoService.saveModel($scope.stories);
            };
        


    });
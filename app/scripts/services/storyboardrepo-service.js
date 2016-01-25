'use strict';

/**
 * @ngdoc service
 * @name angelloApp.StoryboardRepoService
 * @description
 * # StoryboardRepoService
 * Service in the angelloApp.
 */
angular.module('angelloApp')
  .service('StoryboardRepoService', function StoryboardRepoService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    
    
   this.loadModel = function(){
      	var model = localStorage['StoryBoard.Stories'] !== null ? JSON.parse(localStorage['StoryBoard.Stories']) : [] ;
        return model;
   };
    
   this.saveModel = function(stories){
    localStorage['StoryBoard.Stories'] = JSON.stringify(stories);
   };


  });

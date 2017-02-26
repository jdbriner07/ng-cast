angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<',
      selector: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: ['$scope', function($scope) {
      
    }],
    templateUrl: 'src/templates/videoListEntry.html'  
  };
});

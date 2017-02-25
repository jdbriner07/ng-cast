angular.module('video-player')
.directive('videoList', function() { 
  return {
    scope: {
      videoData: '<',
      videos: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log($scope);
    },
    templateUrl: 'src/templates/videoList.html'
  };
});

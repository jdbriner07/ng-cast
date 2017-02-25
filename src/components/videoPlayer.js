angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: ['$scope', function($scope) {
      $scope.getIframe = function (videoId) { 
        if (!!videoId) {
          console.log('https://www.youtube.com/embed/' + videoId);
          return 'https://www.youtube.com/embed/' + videoId;
        } else {
          return false;
        }
      };
    }],
    templateUrl: 'src/templates/videoPlayer.html'
  };
});

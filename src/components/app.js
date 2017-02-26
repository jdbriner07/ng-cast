angular.module('video-player')
.directive('app', function() {
  return {
    scope: {
      videoData: '<',
      playingVideo: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: ['$scope', 'youTube', function($scope, youTube) {
      $scope.ctrl.videos = [];
      $scope.ctrl.currentVideo;
      youTube.search('tmnt', function(response) {
        $scope.ctrl.videos = response;
        $scope.ctrl.currentVideo = response[0];
      });
      $scope.ctrl.searchResults = function(data) {
        $scope.ctrl.videos = data;
        $scope.ctrl.currentVideo = data[0];
      },
      $scope.ctrl.selectVideo = function(video) {
        $scope.ctrl.currentVideo = video;
      };
    }],
    templateUrl: 'src/templates/app.html' 
  };
});

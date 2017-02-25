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
      youTube.search('billy won', function(response) {
        $scope.ctrl.videos = response;
        $scope.ctrl.currentVideo = response[0];
      });
      $scope.ctrl.searchResults = function(searchParams) {
        console.log('hi', searchParams);
        youTube.search(searchParams, function(response) {
          $scope.ctrl.videos = response;
          $scope.ctrl.currentVideo = response[0];
        });
      },
      $scope.ctrl.selectVideo = function() {
      };
      // $scope.ctrl.searchResults = function() {};
    }],
    templateUrl: 'src/templates/app.html' 
  };
});

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
      youTube.search('cats', function(response) {
        return response;
      });
      $scope.ctrl.videos = [];
      $scope.ctrl.currentVideo = window.exampleVideoData[0];
      $scope.ctrl.selectVideo = function(string) {
      };
      $scope.ctrl.searchResults = function() {};
      console.log($scope);
    }],
    templateUrl: 'src/templates/app.html' 
  };
});

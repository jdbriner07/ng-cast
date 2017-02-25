angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<'
    },
    // controllerAs: 'ctrl',
    // bindToController: true,
    controller: ['$scope', function($scope) {
      console.log($scope);
      url = $scope.video.snippet.thumbnails.default.url;
      console.log(url);
    }],

    // controller: function ($scope) {
    //   console.log($scope);
    // },
    templateUrl: 'src/templates/videoListEntry.html'  
  };
});

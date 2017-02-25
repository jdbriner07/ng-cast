angular.module('video-player')
// .controller('MainCtrl', function($scope) {
//   $scope.videoData = window.exampleVideoData;
// })
.directive('app', function() {
  return {
    scope: {
      videoData: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: ['$scope', function($scope) {
      $scope.videoData = window.exampleVideoData;

    }],
    templateUrl: 'src/templates/app.html' 
  };
});

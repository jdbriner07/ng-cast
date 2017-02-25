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
      // console.log($scope.ctrl);
      // $scope.ctrl.clicker = function() {
      //   $scope.ctrl.selector($scope.ctrl.video);
      // };
    }],
    templateUrl: 'src/templates/videoListEntry.html'  
  };
});

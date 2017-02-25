angular.module('video-player')
.directive('videoList', function() { 
  return {
    scope: {
      videos: '<',
      onClick: '<',
      selector: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
    },
    templateUrl: 'src/templates/videoList.html'
  };
});

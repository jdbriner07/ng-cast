angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      result: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: ['$scope', 'youTube', function($scope, youTube) {
      $scope.ctrl.handleClick = function() {
        youTube.search(this.input, function(data) {
          $scope.ctrl.result(data);
        });
      };
    }],
    templateUrl: 'src/templates/search.html'
  };
});

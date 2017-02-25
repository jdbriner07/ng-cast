angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      result: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: ['$scope', function($scope) {
      
    }],
    templateUrl: 'src/templates/search.html'
  };
});

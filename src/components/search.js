angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      result: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: ['$scope', function($scope) {
      console.log($scope);
      // $scope.ctrl.search = function() {

      // };
    }],
    templateUrl: 'src/templates/search.html'
  };
});

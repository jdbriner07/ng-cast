angular.module('video-player')
.service('youTube', '$http', function() {
  return {
    search: function (string, callback) {
      $http({
        method: 'GET',
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${string}&key=$${window.YOUTUBE_API_KEY}&maxResults=$5&type=video&videoEmbeddable=true`
      }).then(function successCallback(response) {
        console.log(response);
        callback(response);
      }, function errorCallback(response) {
        console.log('failed', response);
      });
    }
  };
});

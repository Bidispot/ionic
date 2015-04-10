angular.module('app')

.controller('AppCtrl', function($scope, RoomSrv){
  'user strict';


$scope.messages = RoomSrv.getMessages();

  $scope.sendMessage = function(message) {
    RoomSrv.sendMessage({
    	content: message
    }, $scope.messages);
    $scope.message = '';
  };

});

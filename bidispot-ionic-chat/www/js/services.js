angular.module('app').service('RoomSrv', function($firebaseArray, Config) {
  'use strict';
 
  var firebaseRef = new Firebase(Config.firebaseUrl+'default/');
  
  var service = {
    getMessages: getMessages,
    sendMessage: sendMessage
  };
 
  function getMessages() {
    return $firebaseArray(firebaseRef);
  };
 
  function sendMessage(message, messages) {
    messages.$add(message);
  };
 
  return service;

});

'use strict';

/*
* Service uses database for CURD
*/
todo.factory('todoStorage', function(){
  var STORAGE_ID = 'my-todo';

  return {
    get : function(){
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },
    put : function(todos){
      localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
    }
  };
});

'use strict';

angular.module('schoolApp')
  .factory('Course', ['$http', function($http) {
    return {
      getCourses: function() {
        return $http.get('/app/courses/mock.json').then(res => {
          return res.data;
        });
      },
      enrollIn: function(id) {
        return Promise.resolve({status: 'success'});
      }
    };
  }]);
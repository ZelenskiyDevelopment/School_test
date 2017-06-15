'use strict';

angular.module('schoolApp')
  .controller('CourseCtrl', function($scope, $http, Course, course) {
    $scope.course = course;

    $scope.enroll = function(course) {
      Course.enrollIn(course.id)
        .then(function(result) {
          if (result.status !== 'success')
            return swal({
              title: 'Server error',
              type: 'error',
              timer: 1000,
              showConfirmButton: false
            });

          return swal({
              title: 'Congratulations!',
              text: 'You enrolled in course "' + course.title + '"',
              type: 'success',
            });
        });
    }
  });
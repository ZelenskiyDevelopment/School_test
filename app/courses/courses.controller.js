'use strict';

angular.module('schoolApp')
  .controller('CoursesCtrl', function($scope, $http, Course, courses) {
    $scope.courses = courses;

    $scope.sort = function(field) {
      $scope.courses = _.sortBy($scope.courses, field);
    };

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
    };
  });
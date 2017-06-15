'use strict';

angular.module('schoolApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('courses', {
        url: '/',
        templateUrl: 'app/courses/courses.view.html',
        controller: 'CoursesCtrl',
        resolve: {
          courses: Course => {
            return Course.getCourses();
          }
        }
      })
      .state('courses.course', {
        url: 'view/{id}',
        views: {
          '@': {
            templateUrl: 'app/courses/details/course.view.html',
            controller: 'CourseCtrl',
          }
        },
        resolve: {
          course: (courses, $stateParams) => {
            return _.find(courses, {id: +$stateParams.id});
          }
        }
      });
  });
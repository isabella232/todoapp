// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('todoApp', ['ionic', 'todoApp.controllers', 'todoApp.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:
      .state('tab.todos', {
        url: '/todos',
        views: {
          'tab-todos': {
            templateUrl: 'templates/tab-todos.html',
            controller: 'TodosCtrl'
          }
        }
      })

      .state('tab.doneTodos', {
        url: '/doneTodos',
        views: {
          'tab-doneTodos': {
            templateUrl: 'templates/tab-doneTodos.html',
            controller: 'DoneTodosCtrl'
          }
        }
      })

      .state('tab.newTodo', {
        url: '/newTodo',
        views: {
          'tab-newTodo': {
            templateUrl: 'templates/tab-newTodo.html',
            controller: 'NewTodoCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/todos');

  });

angular.module('todoApp.controllers', []);
angular.module('todoApp.services', []);

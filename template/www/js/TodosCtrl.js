/**
 * Controller for the Todo View.
 */
angular.module('todoApp.controllers')
  .controller('TodosCtrl', function ($scope, storageFactory) {

    $scope.todos = [];

    /**
     * Every time, the view gets called, all todos will be loaded.
     */
    $scope.$on('$ionicView.enter', function (e) {
      loadAllTodos();
    });

    /**
     * Called when a todo should be marked as done.
     * @param index Index od the todo
     */
    $scope.done = function (index) {
      console.log(index);

      $scope.todos[index].done = true;
      storageFactory.save($scope.todos);
    };

    /**
     *   Loads all available todos and binds them in the scope.
     */
    function loadAllTodos() {
      $scope.todos = storageFactory.all();
      console.log($scope.todos);
    }

  });

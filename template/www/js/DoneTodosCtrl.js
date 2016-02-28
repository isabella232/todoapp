/**
 * Controller for the Done Todos View
 */
angular.module('todoApp.controllers')
  .controller('DoneTodosCtrl', function ($scope, storageFactory) {

    /**
     * Every time, the view gets called, all todos will be loaded.
     */
    $scope.$on('$ionicView.enter', function(e) {
      loadAllTodos();
    });

    /**
     * Deletes the selected Todo.
     * @param index Index of the Todo
       */
    $scope.delete = function (index) {
      $scope.todos.splice(index, 1);
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

/**
 * Controller for the New Todo View.
 */
angular.module('todoApp.controllers')
  .controller('NewTodoCtrl', function ($scope, storageFactory) {

    $scope.todo = {
      title: ""
    };

    /**
     * Resets the Form, every time the view gets opened.
     */
    $scope.$on('$ionicView.enter', function (e) {
      clearInputField();
    });

    /**
     * Saves the new Todo and resets the Form.
     */
    $scope.save = function () {
      console.log($scope.todo.title);
      var todo = storageFactory.newTodo($scope.todo.title);
      storageFactory.saveTodo(todo);

      clearInputField();
    };

    /**
     * Resets the form
     */
    function clearInputField() {
      $scope.todo.title = "";
    }

  });

angular.module('todoApp.services', ['ionic'])
  /**
   * The Storage factory handles saving and loading todos
   * from local storage.
   */
  .factory('storageFactory', function () {
    return {

      /**
       * Loads and returns all available todos
       * @returns all fount Todos
       */
      all: function () {
        var storageString = window.localStorage['todos'];
        if (storageString) {
          return angular.fromJson(storageString);
        }
        return [];
      },

      /**
       * Saves a the Todo Array
       * @param todos
       */
      save: function (todos) {
        window.localStorage['todos'] = angular.toJson(todos);
      },

      /**
       * Creates a new Todo Object and returns it.
       * @param title Title of the new Todo
       * @returns {{title: *, done: boolean}}
       */
      newTodo: function (title) {
        return {
          title: title,
          done: false
        };
      },
      /**
       * Saves the given Todo.
       * @param todo Todo that should be saved.
       */
      saveTodo: function (todo) {
        var todos = this.all();
        todos.push(todo);
        this.save(todos);
      }
    }
  });

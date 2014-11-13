// Let's create our first service!
// js/services/todos
angular.module('todoService', [])

    // super simple service
    // each function returns a promise object
    // our "factory" has three different functions, 'get', 'create' and 'delete'.
    .factory('Todos', function($http) {
        return {
            get : function() {
                return $http.get('api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos' + id);
            }
        };
    });
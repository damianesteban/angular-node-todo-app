// our Angular module for our controller.  We will be moving
// most of the code out of core.js into our controller file.
// You can see the code looks very similar to how it used to be.
// That's because the main thing we did was move the old $http
// code outside of our controller and into our service.  The service
// will return a 'promise' object so we can use the data using .success promise.
// js/controllers/main.js

angular.module('todoControler', [])

    // inject the Todo service factory into our controller
    .controller('mainController', function($scope, $http) {
        $scope.formData = {};

        // GET=================================================
        // when loading on the page, get all todos and show them
        // use the service to get all the todos
        Todos.get()
            .success(function(data) {
                $scope.todos = data;
            });

        // CREATE =============================================
        // when submitting the add form, send the text to the node API
        $scope.createTodo = function() {

            // validate the formData to make sure that something is there
            // if form is empty, nothing will happen
            if ($scope.formData.text != undefined) {

                // call the create function from our service (returns a promise object)
                Todos.create($scope.formData)

                    // if successful creation, call our get function to get all the new todos
                    .success(function(data) {
                        $scope.formData = {}; // clear the form so our user is readt to enter
                                          // another
                        $scope.todos = data;
                });
            }
        };

        // DELETE ================================================
        // delete a todo after checking it
        $scope.deleteTodo = function(id) {
            Todos.delete(id)
                // if successful creation, call our get function to get all the
                // new todos
                .success(function(data) {
                    $scope.todos = data; // assign our new list of todos
                });
        };

});
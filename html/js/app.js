(function() {

    var app = angular.module('todoApp', []);

    app.controller('TodoController', TodoController);

    TodoController.$inject = ['$scope'];

    function TodoController($scope) {
        var todo = this;

        $scope.items = [
            {id: 1, text: 'Item 1'},
            {id: 2, text: 'Item 2'},
            {id: 3, text: 'Item 3'},
            {id: 4, text: 'Item 4'},
            {id: 5, text: 'Item 5'}
        ];

        todo.nextId = function () {
            var items = $scope.items;
            var max = 0;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id > max) {
                    max = items[i].id;
                }
            }
            return max + 1;
        };

        $scope.add = function() {
            var id = todo.nextId();
            var text = $scope.newItem;
            $scope.items.push({
                id: id,
                text: text
            });
        };
    }

})();
(function() {

    var app = angular.module('todoApp', []);

    app.controller('TodoController', TodoController);

    TodoController.$inject = ['$scope'];

    function TodoController($scope) {
        var todo = this;

        $scope.items = [
            {id: 1, text: 'Item 1', edit: false},
            {id: 2, text: 'Item 2', edit: false},
            {id: 3, text: 'Item 3', edit: false},
            {id: 4, text: 'Item 4', edit: false},
            {id: 5, text: 'Item 5', edit: false}
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

        $scope.edit = function(item) {
            item.edit = true;
        };

        $scope.save = function(item) {
            item.edit = false;
        };

    }

})();
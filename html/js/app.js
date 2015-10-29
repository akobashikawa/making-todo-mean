(function() {

    var app = angular.module('todoApp', []);

    app.controller('TodoController', TodoController);

    TodoController.$inject = ['$scope'];

    function TodoController($scope) {
        var todo = this;

        $scope.items = [
            {id: 1, text: 'Item 1', order: 1, edit: false, done: false},
            {id: 2, text: 'Item 2', order: 2, edit: false, done: false},
            {id: 3, text: 'Item 3', order: 3, edit: false, done: false},
            {id: 4, text: 'Item 4', order: 4, edit: false, done: false},
            {id: 5, text: 'Item 5', order: 5, edit: false, done: false}
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

        $scope.delete = function(item) {
            var items = $scope.items;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === item.id) {
                    items.splice(i, 1);
                    return;
                }
            }
        };

        $scope.clearDone = function() {
            $scope.items = $scope.items.filter(function(e) {
                return !e.done;
            });
        };

        todo.sortItems = function() {
            var items = $scope.items;
            items.sort(function(a, b) {
                if (a.order > b.order) {
                    return 1;
                }
                if (a.order < b.order) {
                    return -1;
                }
                return 0;
            });
        };

        $scope.up = function(item) {
            var items = $scope.items;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === item.id) {
                    if (i > 0) {
                        var order = items[i].order; 
                        items[i].order = items[i-1].order;
                        items[i-1].order = order;
                        todo.sortItems();
                        return;
                    }
                }
            }
        };

        $scope.down = function(item) {
            var items = $scope.items;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === item.id) {
                    if ((i+1) < items.length) {
                        var order = items[i].order; 
                        items[i].order = items[i+1].order;
                        items[i+1].order = order;
                        todo.sortItems();
                        return;
                    }
                }
            }
        };

    }

})();
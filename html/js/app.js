(function() {

    var app = angular.module('todoApp', []);

    app.controller('TodoController', TodoController);

    TodoController.$inject = ['$scope'];

    function TodoController($scope) {
        var todo = this;

        $scope.items = [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
            'Item 5'
        ];

        $scope.add = function() {
            $scope.items.push($scope.newItem);
        };
    }

})();
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

        $scope.add = function() {
            //$scope.items.push();
        };
    }

})();
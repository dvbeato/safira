

function sfDataGridCtrl($scope, $filter) {
    var cols = $scope.cols = [];

    this.addCol = function(col) {
        cols.push(col);
    };

    $scope.render = function(value, col) {
        value = col.filter ? $filter(col.filter)(value, col.format) : value;
        return value;
    };

    $scope.totalize = function(col) {
        var sum = $scope.data
            .map(function(item) { return item[col.value]; })
            .reduce(function(p, n) { return p + n; });

        return $scope.render(sum, col);
    };
}

sfDataGridCtrl.$inject = ['$scope', '$filter'];

function sfDataGrid() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/sf-data-grid-template.html',
        controller: sfDataGridCtrl,
        transclude: true,
        scope: {
            data: '='
        }
    };
}

angular.module('safira')
    .directive('sfDataGrid', sfDataGrid);

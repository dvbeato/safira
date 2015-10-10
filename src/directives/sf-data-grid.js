
function SfDataGridCtrl($scope) {
    var cols = $scope.cols = [];

    this.addCol = function(col) {
        cols.push(col);
    };
}

function sfDataGrid() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/sf-data-grid-template.html',
        controller: SfDataGridCtrl,
        transclude: true,
        scope: {
            data: '='
        }
    };
}

angular.module('safira')
    .directive('sfDataGrid', sfDataGrid);

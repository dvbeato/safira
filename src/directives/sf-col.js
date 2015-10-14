
function sfCol() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            label: '@',
            value: '@',
            filter: '@',
            format: '@',
            totalized: '@',
            ngClass: '='
        },
        require: '^sfDataGrid',
        link: function(scope, element, attrs, sfDataGridCtrl) {
            sfDataGridCtrl.addCol(scope);
        }
    };
}

angular.module('safira')
    .directive('sfCol', sfCol);


function sfCol() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            label: '@',
            value: '@'
        },
        require: '^sfDataGrid',
        link: function(scope, element, attrs, sfDataGridCtrl) {
            sfDataGridCtrl.addCol(scope);
        }
    };
}

angular.module('safira')
    .directive('sfCol', sfCol);

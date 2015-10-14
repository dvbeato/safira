
angular.module('safira-demo', ['safira'])
    .controller('DemoCtrl', function($scope) {
        $scope.products = [
            {name:'Guitar 01', price:100, valid: new Date()},
            {name:'Guitar 02', price:200, valid: new Date()},
            {name:'Guitar 03', price:300, valid: new Date()},
            {name:'Guitar 04', price:400, valid: new Date()}
        ];
    });

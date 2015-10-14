(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
  'use strict';

  Array.prototype.contains = Array.prototype.contains || function (element) {
    return this.indexOf(element) > -1;
  };

  Array.prototype.first = Array.prototype.first || function () {
    return this[0] || null;
  };

  Array.prototype.last = Array.prototype.last || function () {
    return this[this.size() - 1] || null;
  };

  Array.prototype.size = Array.prototype.size || function () {
    return this.length;
  };

  Array.prototype.isEmpty = Array.prototype.isEmpty || function() {
    return this.length == 0;
  };

  Array.prototype.removeAt = Array.prototype.removeAt || function (index) {
    return this.splice(index, 1)[0];
  };

  Array.prototype.remove = Array.prototype.remove || function (object) {
    if (!this.contains(object)) {
      return undefined;
    }

    var index = this.indexOf(object);
    return this.removeAt(index);
  };

})();

},{}],2:[function(require,module,exports){
require('./array.js');
require('./number.js');
require('./object.js');
require('./string.js');

},{"./array.js":1,"./number.js":3,"./object.js":4,"./string.js":5}],3:[function(require,module,exports){
(function () {
  'use strict';
  //NOT IMPLEMENTED YET!!
})();

},{}],4:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],5:[function(require,module,exports){
(function () {
  'use strict';

  String.prototype.capitalize = String.prototype.captalize || function() {
    return this.charAt( 0 ).toUpperCase() + this.substring( 1 ).toLowerCase();
  }

  String.prototype.contains = String.prototype.contains || function(string, caseInsensitive) {
    if(caseInsensitive) return this.toLowerCase().indexOf(string.toLowerCase()) > -1;
    return this.indexOf(string) > -1;
  }

  String.prototype.startsWith = String.prototype.startsWith || function(string, caseInsensitive) {
    if (caseInsensitive) return this.toLowerCase().indexOf(string.toLowerCase()) === 0;
    return this.indexOf(string) === 0;
  }

})();

},{}],6:[function(require,module,exports){

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

},{}],7:[function(require,module,exports){


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

},{}],8:[function(require,module,exports){

angular.module('safira', ['safira-templates']);

},{}],9:[function(require,module,exports){

require('automail');
require('./safira-templates.js');
require('./safira-app.js');
require('./directives/sf-data-grid.js');
require('./directives/sf-col.js');


},{"./directives/sf-col.js":6,"./directives/sf-data-grid.js":7,"./safira-app.js":8,"./safira-templates.js":10,"automail":2}],10:[function(require,module,exports){
angular.module('safira-templates', ['templates/sf-data-grid-template.html']);

angular.module("templates/sf-data-grid-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/sf-data-grid-template.html",
    "<div class=sf-data-grid><div class=sf-cols ng-transclude></div><table class=\"table table-striped\"><thead><tr><th ng-repeat=\"col in cols\">{{col.label}}</th></tr></thead><tbody><tr ng-repeat=\"item in data\"><td ng-repeat=\"col in cols\" ng-class=col.ngClass>{{ render(item[col.value], col) }}</td></tr></tbody><tfoot><tr><td ng-repeat=\"col in cols\">{{ col.totalized ? totalize(col) : ''}}</td></tr></tfoot></table></div>");
}]);

},{}]},{},[9]);

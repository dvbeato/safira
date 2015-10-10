angular.module('safira-templates', ['templates/sf-data-grid-template.html']);

angular.module("templates/sf-data-grid-template.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("templates/sf-data-grid-template.html",
    "<div class=sf-data-grid><div class=sf-cols ng-transclude></div><table class=\"table table-striped\"><thead><tr><th ng-repeat=\"col in cols\">{{col.label}}</th></tr></thead><tbody><tr ng-repeat=\"item in data\"><td ng-repeat=\"col in cols\">{{ item[col.value] }}</td></tr></tbody><tfoot></tfoot></table></div>");
}]);

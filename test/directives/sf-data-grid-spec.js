var angular = require('angular');
require('angular-mocks');
require('../../src/safira-module.js');

describe('Safira Directive: sf-data-grid', function() {

    var element,
        scope;

    beforeEach(angular.mock.module('safira'));
    beforeEach(angular.mock.module('safira-templates'));

    beforeEach(inject(function($compile, $rootScope) {
        scope = $rootScope;

        element = angular.element(
            '<div>' +
            '<sf-data-grid data="items">' +
                '<sf-col label="Name" value="name" ></sf-col>' +
                '<sf-col label="Price" value="price" ></sf-col>' +
            '</sf-data-grid>' +
            '</div>'
        );

        scope.items = [
            {name: 'Item 01', price: 100},
            {name: 'Item 02', price: 200},
            {name: 'Item 03', price: 300},
            {name: 'Item 04', price: 400}
        ];

        $compile(element)(scope);

        scope.$digest();
    }));

    it('should render propertly', function() {
        var thead = element.find('thead');
        var cols = element.find('th');

        expect(thead.find('tr').length).to.equal(1);
        expect(cols.length).to.equal(2);
        expect(cols.eq(0).text()).to.equal('Name');
        expect(cols.eq(1).text()).to.equal('Price');

        var rows = element.find('tbody').find('tr');
        expect(rows.length).to.equal(4);
        expect(rows.eq(0).html()).to.have.string('Item 01');
        expect(rows.eq(0).html()).to.have.string('100');

        expect(rows.eq(1).html()).to.have.string('Item 02');
        expect(rows.eq(1).html()).to.have.string('200');

        expect(rows.eq(2).html()).to.have.string('Item 03');
        expect(rows.eq(2).html()).to.have.string('300');

        expect(rows.eq(3).html()).to.have.string('Item 04');
        expect(rows.eq(3).html()).to.have.string('400');
    });
});

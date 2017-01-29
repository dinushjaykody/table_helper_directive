(function(){

    angular.module('directivesModule').directive('isolateScopeWithObject', function(){

        return {
            scope : {
                datasource: '='
            },
            template: 'Name: {{datasource.name}} + Street: {{datasource.street}}' + '</br> <button ng-click="datasource.name=\'Fred\'">Change</button>'
        }
    })
}());
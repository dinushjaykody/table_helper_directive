(function(){

    angular.module('directivesModule').directive('isolateScopeWithString', function(){

        return {
            scope : {
                name: '@'
            },
            template: 'Name: {{name}}'
        }
    })
}());
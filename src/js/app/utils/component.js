
// creates a module which provides component API function
export var createModule = function(moduleName, moduleDependencies) {
    var module = angular.module(moduleName, moduleDependencies);
    module.component = function(componentName, componentOptions) {
        return this.directive(componentName, componentHelper(componentOptions));
    };
    return module;
};

// provides a function which performs a mixin for components
export var componentHelper = function(componentOptions) {

    var componentDefaults = {
        restrict: 'E',
        scope: {},
        controller: function () { },
        controllerAs: '$ctrl',
        bindToController: true,
        link: function(scope, element, attrs, ctrls, transclude) {

            if (typeof componentOptions.$postLink === 'function') {
                componentOptions
                    .$postLink(scope, element, attrs, ctrls, transclude);
            }

        },
    };

    return function() {
        var dirDef = angular.extend({}, componentDefaults, componentOptions);

        if (dirDef.bindings) {
            dirDef.scope = dirDef.bindings;
            delete dirDef.bindings;
        }
        
        return dirDef;
    };
};
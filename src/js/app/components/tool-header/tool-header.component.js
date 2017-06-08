import { componentHelper } from '../../utils/component';

export var toolHeaderComponent = [ 'toolHeader', componentHelper({
    transclude: true,
    template: require('./tool-header.component.html'),
    controller: function() { }
}) ];
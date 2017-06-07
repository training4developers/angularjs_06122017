import { componentHelper } from '../../utils/component';

export var toolHeaderComponent = [ 'toolHeader', componentHelper({
    transclude: true,
    template: require('./tool-header.component.html'),
    bindings: {
        smallText: '=',
    },
    controller: function() {
        this.headerText = 'This is fun!';
    }
}) ];
import { componentHelper } from '../../utils/component';

export var unorderedListComponent = [ 'unorderedList', componentHelper({
    template: require('./unordered-list.component.html'),
    bindings: {
        items: '=',
    },
}) ];
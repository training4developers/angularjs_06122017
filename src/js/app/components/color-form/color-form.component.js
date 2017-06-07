import { componentHelper } from '../../utils/component';

export var colorFormComponent = [ 'colorForm', componentHelper({
    template: require('./color-form.component.html'),
    bindings: {
        // output binding
        submitColor: '&',
    },
}) ];
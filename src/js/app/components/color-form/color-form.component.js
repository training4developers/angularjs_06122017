import { componentHelper } from '../../utils/component';

export var colorFormComponent = [ 'colorForm', componentHelper({
    template: require('./color-form.component.html'),
    bindings: {
        onSubmitColor: '&',
    },
    controller: function () {

        var vm = this;

        vm.submitColor = function(color) {
            vm.onSubmitColor(color).then(function() {
                vm.color = '';
            });
        };
    }
}) ];
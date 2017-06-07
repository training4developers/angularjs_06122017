import { create } from 'core-js/es6/object';

export function extendsHelper(SubClass, SuperClass) {
    SubClass.prototype = create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
    SubClass.prototype._super = SuperClass;
}
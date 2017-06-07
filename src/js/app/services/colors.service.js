import { extendsHelper } from '../utils/prototype-inheritance';
import { BaseREST } from './base-rest.service';

Colors.$inject = [ '$http' ];

function Colors($http) {
    this._super.call(this, $http, 'http://localhost:3010/colors');
}

extendsHelper(Colors, BaseREST);

export var colorsService = [ 'Colors',  Colors ];

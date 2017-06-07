


export function BaseREST($http, baseURL) {
    this.$http = $http;
    this.baseURL = baseURL;
}

BaseREST.prototype.all = function() {
    return this.$http.get(this.collectionURL());
};

BaseREST.prototype.one = function(modelId) {
    return this.$http.get(this.elementURL(modelId));
};

BaseREST.prototype.insert = function(model) {
    return this.$http.post(this.collectionURL(), model);
};

BaseREST.prototype.replace = function(model) {
    return this.$http.put(this.elementURL(model.id), model);
};

BaseREST.prototype['delete'] = function(modelId) {
    return this.$http['delete'](this.elementURL(modelId));
};

BaseREST.prototype.collectionURL = function() {
    return this.baseURL;
};

BaseREST.prototype.elementURL = function(elementId) {
    return this.baseURL + '/' + encodeURIComponent(elementId);
};
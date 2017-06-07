'use strict';

var appContext = require.context('./src/js', true, /\.spec\.js/);
appContext.keys().forEach(appContext);
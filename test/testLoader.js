'use strict';

require('core-js/fn/object/assign');

const testsContext = require.context('.',true, /(-test\.js$)|(-helper\.js$)/);
testsContext.keys().forEach(testsContext);
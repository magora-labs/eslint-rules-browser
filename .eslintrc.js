'use strict';


const fs = require('fs');
const path = require('path');

const rc = require('./eslintrc');
const internal = fs.accessSync('./node_modules');


module.exports = {
  ...rc,
  extends: [
    path.join(internal ? './node_modules/' : '../', 'mgl-eslint-rules/.eslintrc')
  ]
}

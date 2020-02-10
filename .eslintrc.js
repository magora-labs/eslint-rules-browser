'use strict';


const fs = require('fs');
const path = require('path');

const rc = require('./.eslintrc.json');
let internal = true;

try {
  fs.accessSync(path.join(__dirname, './node_modules'));
} catch (error) {
  internal = false;
}


module.exports = {
  ...rc,
  extends: `${internal ? './node_modules/' : '../'}mgl-eslint-rules/.eslintrc`
};

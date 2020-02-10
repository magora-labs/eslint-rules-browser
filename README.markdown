# eslint-rules-browser

**_A eslint rule set for browser javascript_**

Style rules closely follow google's javascript style guide.

### Installation

`npm i mgl-eslint-rules-browser`

### Using as configuration file

Create a `.eslintrc` with

```js
{
  "extends": [
    "./node_modules/mgl-eslint-rules-browser/.eslintrc"
    // Use `.js` file if path cannot be resolved - `mgl-eslint-rules` not found.
    // "./node_modules/mgl-eslint-rules-browser/.eslintrc.js"
  ],
  "rules": {
    // add your rules here
  }
}

```

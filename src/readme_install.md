

## Installation `JSONEditor4Menu`
There are two main types to use `JSONEditor4Menu` for you projects. With a `script`-tag in your HTML file or with a package manager like [NPM](https://www.npmjs.com/) with [NodeJS]()
### Installation `JSONEditor4Menu` with NPM for Scripts
Assume you have NPM installed and your have created e.g. a folder `mypackage/` for your package with `package.json` in the folder `. Go to the folder `mypackage/` and call
```javascript
npm install jsoneditor4menu --save
```
Then you will find `jsoneditor4menu` in the folder `mypackage/node_modules/jsoneditor4menu`.
If you want to use `JSONEditor4Menu` in your scripts use the following require-call:
```javascript
const  JSONEditor4Menu = require('jsoneditor4menu');
```
Now it is possible to use `JSONEditor4Menu` in your scripts.
### Installation `JSONEditor4Menu` for Browser for Scripts-Tags
If you want to use the library `jsoneditor4menu.js` in a browser, please copy the file `dist/jsoneditor4menu.js` into your library folder (e.g. `/js`) and
import the library with `script`-tag with:
```html
<script src="js/jsoneditor4menu.js"></script>
```
Now it is possible to use `JSONEditor4Menu` in your other imported scripts.

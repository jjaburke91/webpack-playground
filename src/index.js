const React = require("react");
const ReactDOM = require("react-dom");

const ReactElement = require("./ReactElement.jsx");

const mod = require('./importedModule.js');
const sharedUtils = require('../shared/utils.js');

sharedUtils.sharedUtil();
mod();

ReactDOM.render(
  <ReactElement />,
  document.getElementById('app')
);

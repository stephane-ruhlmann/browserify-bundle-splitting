var React        = require('react');
var router = require("react-router");
var mixin = require("baobab-react/mixins");
var HelloMessage = require('./component');

React.render(React.createElement(HelloMessage, {name: "World"}), document.body);

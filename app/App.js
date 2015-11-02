var React = require('react');
var Router = require('react-router').Router;
var routes = require('./config/routes');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <Router>{routes}</Router>, 
  document.getElementById('app')
);
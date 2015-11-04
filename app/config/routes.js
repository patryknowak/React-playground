var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Profile = require('../components/Profile');
var Router = require('react-router');
var IndexRoute = Router.IndexRoute;
var Route = Router.Route;

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="profile/:username" component={Profile}/>
  </Route>
);
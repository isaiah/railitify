/** @jsx React.DOM */
"use strict";

var React         = require('react');
var Router        = require('react-router');
var Route         = Router.Route;
var Routes        = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;
var Link          = Router.Link;

window.React = React;
var routes = (
  <Routes>
    <Route name='app' handler={App}>
      <DefaultRoute handler={Dashboard} />
    </Route>
  </Routes>
);

React.renderComponent(routes, document.getElementById("app"));

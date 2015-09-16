'use strict';

const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const RouteHandler = Router.RouteHandler;

const SiteFooter = require('./components/SiteFooter');

const RaisedButton = require('material-ui/lib/raised-button');

const App = React.createClass({
  render: function() {
    return (
      <div className="ask-page">
        <RaisedButton label="Default" />

        <main className="ask-main">
          <RouteHandler />
        </main>
        <SiteFooter />
      </div>
    );
  }
});

// Pages
const Index = require('./pages/Index');
const Page1 = require('./pages/Page1');
const Page2 = require('./pages/Page2');

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="index" handler={Index}/>
    <Route name='page1' handler={Page1}/>
    <Route name='page2' handler={Page2}/>
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  Router.run(routes,
    function(Handler) {
      React.render(<Handler />, document.body);
    });
});

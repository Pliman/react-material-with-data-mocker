'use strict';

const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const RouteHandler = Router.RouteHandler;

const Footer = require('./common/Footer');

const RaisedButton = require('material-ui/lib/raised-button');
let ThemeManager = new (require('material-ui/lib/styles/theme-manager'))();

const App = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object
	},
	getChildContext: function () {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	},
	render: function () {
		return (
			<div className="page">
				<div className="row">
					<div className="col-md-4" style={{backgroundColor:'blue'}}>.col-md-4</div>
					<div className="col-md-8">.col-md-8</div>
				</div>
				<div className="row">
					<div className="col-md-3" style={{backgroundColor:'blue'}}>.col-md-3</div>
					<div className="col-md-9">.col-md-9</div>
				</div>
				<RaisedButton label="Super Secret Password" primary={true}/>

				<main className="main">
					<RouteHandler />
				</main>
				<Footer/>
			</div>
		);
	}
});

// Pages
const Index = require('./pages/index');
const Page1 = require('./pages/page1');
const Page2 = require('./pages/page2');

const routes = (
	<Route name="app" path="/" handler={App}>
		<DefaultRoute name="index" handler={Index}/>
		<Route name='page1' handler={Page1}/>
		<Route name='page2' handler={Page2}/>
	</Route>
);

document.addEventListener('DOMContentLoaded', function () {
	Router.run(routes,
		function (Handler) {
			React.render(<Handler />, document.body);
		});
});

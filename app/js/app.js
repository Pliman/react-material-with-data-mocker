'use strict';

const React = require('react');
const Router = require('react-router');
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const RouteHandler = Router.RouteHandler;

let ThemeManager = new (require('material-ui/lib/styles/theme-manager'))();

const App = React.createClass({
	childContextTypes: {
		muiTheme: React.PropTypes.object,
		user: React.PropTypes.object,
		setUser: React.PropTypes.func
	},
	getChildContext: function () {
		var _this = this;

		return {
			muiTheme: ThemeManager.getCurrentTheme(),
			user: {
				user: {
					name: 2
				},
				update: function (user) {
					_this.context.user.user = user;
				}
			},
			setUser: function (user) {
				this.context.user = user;
			}
		};
	},
	render: function () {
		return (
			<RouteHandler />
		);
	}
});

// Pages
const Login = require('./pages/login');
const Index = require('./pages/index');
const Page1 = require('./pages/page1');
const Page2 = require('./pages/page2');

const routes = (
	<Route name="app" path="/" handler={App}>
		<DefaultRoute name="login" handler={Login}/>
		<Route name="index" handler={Index}>
			<Route name='page1' path='/page1' handler={Page1}/>
			<Route name='page2' path='/page2' handler={Page2}/>
		</Route>
	</Route>
);

document.addEventListener('DOMContentLoaded', function () {
	Router.run(routes,
		function (Handler) {
			React.render(<Handler />, document.body);
		});
});

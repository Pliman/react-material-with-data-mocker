'use strict';

var React = require('react');
const Router = require('react-router');
const RouteHandler = Router.RouteHandler;

const RaisedButton = require('material-ui/lib/raised-button');
const Footer = require('../common/footer');

var Index = React.createClass({
	mixins: [Router.Navigation],
	contextTypes: {
		user: React.PropTypes.object,
		setUser: React.PropTypes.func
	},
	getInitialState: function () {
		console.log('parent init state');

		//var user = localStorage.getItem('user');
		if (this.context.user.user.name === '1') {
			this.transitionTo('page1');
			return null;
		}

		this.transitionTo('login');
		return null;
	},
	render: function () {
		return (
			<div className="page">
				<main className="main">
					<RouteHandler />
				</main>

				<Router.Link className="btn btn-default" to="page1">page1</Router.Link>
				<Router.Link className="btn btn-default" to="page2">page2</Router.Link>

				<div className="row">
					<div className="col-md-4" style={{backgroundColor:'#1976d2'}}>
						.col-md-4
					</div>
					<div className="col-md-8">.col-md-8</div>
				</div>
				<div className="row">
					<div className="col-md-3" style={{backgroundColor:'#1976d2'}}>
						.col-md-3
					</div>
					<div className="col-md-9">.col-md-9</div>
				</div>
				<RaisedButton label="Super Secret Password" secondary={true}/>
				<Footer/>
			</div>
		);
	}
});

module.exports = Index;

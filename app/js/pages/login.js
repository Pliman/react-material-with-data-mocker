'use strict';

const React = require('react');
const Router = require('react-router');

const Index = React.createClass({
	mixins: [Router.Navigation],
	doLogin: function () {
		var _this = this;
		setTimeout(function () {
			_this.transitionTo('index');
			localStorage.setItem('user', '1');
		}, 300);
	},
	render: function () {
		return (
			<div className="page">
				<div className="row">
					<div className="col-md-12">
						<label>用户名</label>
						<input type="text"/>
						<button onClick={this.doLogin}>登陆</button>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Index;

'use strict';

const React = require('react');

const Index = React.createClass({
	mixins: [],
	doLogin: function () {
		setTimeout(function () {
			console.log(123);
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

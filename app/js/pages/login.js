const React = require('react');
const Router = require('react-router');

const Index = React.createClass({
	mixins: [Router.Navigation],
	contextTypes: {
		user: React.PropTypes.object,
		setUser: React.PropTypes.func
	},
	doLogin: function () {
		var _this = this;
		setTimeout(function () {
			_this.context.setUser({name: '1'});
			_this.transitionTo('index');
			//localStorage.setItem('user', '1');
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

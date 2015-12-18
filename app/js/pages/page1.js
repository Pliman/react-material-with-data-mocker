'use strict';

const React = require('react');

const Reflux = require('reflux');
const ListStore = require('./list-store');
const ListActions = require('./list-actions');

let count = 0;

const Page1 = React.createClass({
	mixins: [Reflux.connect(ListStore, "list")],
	action: function () {
		ListActions.list('aaa');
	},
	render: function () {
		let _this = this;

		return (
			<div className="am-padding-vertical-lg">
				<div className="row">
					<div className="col-md-12"
					     style={{backgroundColor:'#1976d2'}}>
						<button onClick={this.action}>action!!!</button>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12"
					     style={{backgroundColor:'#1976d2'}}>
						{ [1, 2, 3].map(function (item) {
							let a = _this;
							return <p key={item}>item</p>;
						})
						}
					</div>
				</div>

				{this.state.list.map(function (item, $index) {
					return <div className="row" key={item + '' + $index}>
								<div className="col-md-12"
								     style={{backgroundColor:'#1976d2'}}>
									{item}
								</div>
							</div>
				})}
				<h2>页面 1</h2>
				<p>页面内容</p>
			</div>
		);
	}
});

module.exports = Page1;

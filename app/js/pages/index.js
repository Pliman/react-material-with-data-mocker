'use strict';

var React = require('react');

const RaisedButton = require('material-ui/lib/raised-button');
const Footer = require('../common/footer');

var Index = React.createClass({
	render: function () {
		return (
			<div className="page">
				<div className="row">
					<div className="col-md-4" style={{backgroundColor:'blue'}}>
						.col-md-4
					</div>
					<div className="col-md-8">.col-md-8</div>
				</div>
				<div className="row">
					<div className="col-md-3" style={{backgroundColor:'blue'}}>
						.col-md-3
					</div>
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

module.exports = Index;

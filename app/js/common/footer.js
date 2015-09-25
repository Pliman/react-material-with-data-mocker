'use strict';

const React = require('react');
const year = new Date().getFullYear();

const Footer = React.createClass({
	render: function () {
		return (
			<footer className="footer">
				<div>
					<p>© {year} Pliman. Licensed under MIT license.</p>
				</div>
			</footer>
		);
	}
});

module.exports = Footer;

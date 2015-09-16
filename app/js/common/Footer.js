'use strict';

const React = require('react');
const year = new Date().getFullYear();

const SiteFooter = React.createClass({

	render: function () {
		return (
			<footer className="ask-footer">
				<div>
					<p>© {year} Pliman. Licensed under MIT license.</p>
				</div>
			</footer>
		);
	}
});

module.exports = SiteFooter;

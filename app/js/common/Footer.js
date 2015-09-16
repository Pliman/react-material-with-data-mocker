'use strict';

const React = require('react');
const year = new Date().getFullYear();

const SiteFooter = React.createClass({

  render: function() {
    return (
      <footer className="ask-footer">
        <div>
          <p>© {year} AllMobilize, Inc. Licensed under MIT license.
            Developed with WebStorm.</p>
        </div>
      </footer>
    );
  }
});

module.exports = SiteFooter;

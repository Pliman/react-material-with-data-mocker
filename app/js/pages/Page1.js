'use strict';

const React = require('react');

const Page1 = React.createClass({
  render: function() {
    return (
      <div className="am-padding-vertical-lg">
        <h2>页面 1</h2>
        <p>页面内容</p>
      </div>
    );
  }
});

module.exports = Page1;

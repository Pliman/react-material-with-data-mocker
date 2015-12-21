const React = require('react');
import { Provider } from 'react-redux'
import App from './counter-app'
import configureStore from './configureStore'

const store = configureStore()

const Page1 = React.createClass({
	render: function () {
		return (
			<div className="am-padding-vertical-lg">
				<h2>页面 1</h2>
				<p>页面内容</p>

				<Provider store={store}>
					<App />
				</Provider>
			</div>
		);
	}
});

module.exports = Page1;

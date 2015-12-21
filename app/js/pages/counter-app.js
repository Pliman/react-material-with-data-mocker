//////////////
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from './counter/counter-component'
import * as CounterActions from './counter/counter-actions'

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
//////////////

//const React = require('react');
//
//const Page1 = React.createClass({
//  render: function() {
//    return (
//      <div className="am-padding-vertical-lg">
//        <h2>页面 1</h2>
//        <p>页面内容</p>
//      </div>
//    );
//  }
//});
//
//module.exports = Page1;

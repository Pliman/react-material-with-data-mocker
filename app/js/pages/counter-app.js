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

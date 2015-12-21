import React, { Component, PropTypes } from 'react'

class Counter extends Component {
	render() {
		const { incrementIfOdd, counter } = this.props
		return (
			<p>
				Clicked: {counter} times
				{' '}
				<button onClick={incrementIfOdd}>Increment if odd</button>
			</p>
		)
	}
}

Counter.propTypes = {
	incrementIfOdd: PropTypes.func.isRequired,
	counter: PropTypes.number.isRequired
}

export default Counter

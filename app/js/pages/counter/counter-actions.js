export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function incrementIfOdd() {
	return (dispatch, getState) => {
		const { counter } = getState();

		if (counter % 2 === 0) {
			console.log('其实不应该增加');
			return {
				type: INCREMENT_COUNTER
			}
		}

		return {
			type: INCREMENT_COUNTER
		}
	}
}
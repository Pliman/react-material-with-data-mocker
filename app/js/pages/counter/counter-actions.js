export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function increment() {
	console.log('增加');

	return {
		type: INCREMENT_COUNTER
	}
}

export function incrementIfOdd() {
	let a = function () {
		return () => {
			return 1;
		}
	};

	let b = a();

	// 此处放回了function
	return (dispatch, getState) => {
		const { counter } = getState();

		if (counter % 2 === 0) {
			console.log('其实不应该增加');
		}

		dispatch(increment()); // working


		//return {
		//	type: INCREMENT_COUNTER
		//} not working why?? (dispatch, getState) => {} 语法原因 - 返回值要么是个对象，如果是个function，就必须手动调用dispatch
	}
}
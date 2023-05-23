import React, { useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT": {
			return { count: state.count + 1, showText: state.showText };
		}
		case "SHOW_SOME_TEXT": {
			return { count: state.count, showText: !state.showText };
		}
		default:
			return state;
	}
};

function Counter() {
	const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

	return (
		<div>
			<h2>{state.count}</h2>
			<button
				onClick={() => {
					dispatch({ type: "INCREMENT" });
					dispatch({ type: "SHOW_SOME_TEXT" });
				}}
			>
				Click Here
			</button>
			<br />
			<br />
			{state.showText && <p>Learning React Hooks</p>}
		</div>
	);
}

export default Counter;

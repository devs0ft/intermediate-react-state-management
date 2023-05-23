import React from "react";

function Form() {
	return (
		<form>
			<h2>City Quiz</h2>
			<label>
				In which city is there a billboard that turns air into drinkable water?
			</label>{" "}
			<br />
			<input type="text" /> <br />
			<button style={{ marginTop: 10 }} type="submit">
				Submit
			</button>
		</form>
	);
}

export default Form;

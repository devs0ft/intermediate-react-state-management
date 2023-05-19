import React from "react";

function Panel({ title, children, onShow, isActive }) {
	return (
		<section>
			<h3>{title}</h3>
			{isActive ? <p>{children}</p> : <button onClick={onShow}>show</button>}
		</section>
	);
}

export default Panel;

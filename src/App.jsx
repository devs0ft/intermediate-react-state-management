import React, { useState } from "react";
import Panel from "./Panel";
import Form from "./Form";
import Counter from "./useReducer_Practice/Counter";

function App() {
	const [showText, setShowText] = useState(0);
	return (
		<div>
			{/* <Panel
				isActive={showText === 0}
				onShow={() => setShowText(0)}
				title="Kazahkstan"
			>
				With a population of about 2 million, Almaty is Kazakhstan's largest{" "}
				city. From 1929 to 1997, it was its capital city.
			</Panel>
			<Panel
				isActive={showText === 1}
				onShow={() => setShowText(1)}
				title="Etymology"
			>
				The name comes from алма, the Kazakh word for "apple" and is often
				translated as "full of apples". In fact, the region surrounding Almaty
				is thought to be the ancestral home of the apple, and the wild Malus
				sieversii is considered a likely candidate for the ancestor of the
				modern domestic apple.
			</Panel>
			<Panel
				isActive={showText === 0}
				onShow={() => setShowText(0)}
				title="History"
			>
				is a word of multiple meanings, all related to the past. When used as
				the name of a field of study, history traditionally refers to the study
				and interpretation of the written record of past human activity, people,
				societies, and civilizations leading up to the present day.
			</Panel>
			<Panel
				isActive={showText === 1}
				onShow={() => setShowText(1)}
				title="Metahistorical interpretation"
			>
				The metahistorical interpretation consists in efforts to find historical
				patterns and generalities beyond history. Metahistorians such as Oswald
				Spengler and Arnold Toynbee saw history in terms of these general
				patterns according to which civilizations rise and fall.
			</Panel> */}
			{/* <Form /> */}
			<Counter />
		</div>
	);
}

export default App;

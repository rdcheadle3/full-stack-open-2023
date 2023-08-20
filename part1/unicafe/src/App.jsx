import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const Display = ({ value }) => <div>{value}</div>;

const App = () => {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const handleButtonClicked = (type) => {
		console.log(`${type} clicked`);

		setFeedback({ ...feedback, [type]: feedback[type] + 1 });

		console.log(feedback);
	};

	return (
		<div>
			<Header text="give feedback" />
			<Button handleClick={() => handleButtonClicked("good")} text="good" />
			<Button
				handleClick={() => handleButtonClicked("neutral")}
				text="neutral"
			/>
			<Button handleClick={() => handleButtonClicked("bad")} text="bad" />
			<Header text="statistics" />
			<Display value={feedback.good} />
			<Display value={feedback.neutral} />
			<Display value={feedback.bad} />
		</div>
	);
};

export default App;

import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const Display = ({ label, value }) => (
	<div>
		{label} {value}
	</div>
);

const App = () => {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const handleButtonClicked = (type) => {
		console.log(`${type} clicked`);

		setFeedback((prevFeedback) => {
			const updatedFeedback = {
				...prevFeedback,
				[type]: prevFeedback[type] + 1,
			};
			console.log(updatedFeedback);
			return updatedFeedback;
		});
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
			<Display label="good" value={feedback.good} />
			<Display label="neutral" value={feedback.neutral} />
			<Display label="bad" value={feedback.bad} />
		</div>
	);
};

export default App;

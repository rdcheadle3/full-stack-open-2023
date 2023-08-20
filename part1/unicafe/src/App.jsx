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

	const feedbackValues = {
		good: 1,
		neutral: 0,
		bad: -1,
	};

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

	const weightedFeedback = {
		good: feedback.good * feedbackValues.good,
		neutral: feedback.neutral * feedbackValues.neutral,
		bad: feedback.bad * feedbackValues.bad,
	};

	const averageFeedback =
		(weightedFeedback.good + weightedFeedback.neutral + weightedFeedback.bad) /
		(feedback.good + feedback.neutral + feedback.bad);

	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

	const positiveFeedback = (feedback.good / totalFeedback) * 100 + " %";

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
			<Display label="all" value={totalFeedback} />
			<Display label="average" value={averageFeedback} />
			<Display label="positive" value={positiveFeedback} />
		</div>
	);
};

export default App;

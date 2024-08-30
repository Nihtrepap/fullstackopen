import { useState } from "react";

const StatisticLine = (props) => {
  const percentText = ["positive"];
  const percentage = props.text;
  return (
    <>
      <td>{props.text}</td>
      <td>
        {props.value} {percentText.includes(props.text) ? "%" : ""}
      </td>
    </>
  );
};

const Statistics = (props) => {
  console.log(props);
  let review = props.review;
  return (
    <>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={review.good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={review.neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={review.bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={review.all} />
          </tr>
          <tr>
            <StatisticLine text="average" value={review.average} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={review.positive} />
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Button = (props) => {
  console.log(props);
  return <button onClick={props.click}>{props.value}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getAll = () => {
    return good + neutral + bad;
  };

  const getAverage = () => {
    return (good - bad) / getAll();
  };

  const getPositive = () => {
    return (good / getAll()) * 100;
  };

  const checkIfReviews = getAll() > 0 ? true : false;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button value="good" click={() => setGood(good + 1)}></Button>
      <Button value="neutral" click={() => setNeutral(neutral + 1)}></Button>
      <Button value="bad" click={() => setBad(bad + 1)}></Button>
      <h1>Statistics</h1>
      {checkIfReviews ? (
        <Statistics
          review={{
            good: good,
            neutral: neutral,
            bad: bad,
            all: getAll(),
            average: getAverage(),
            positive: getPositive(),
          }}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;

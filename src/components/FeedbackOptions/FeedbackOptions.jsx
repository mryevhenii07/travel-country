import React from "react";
import Statistics from "../../components/Statistics/Statistics";
import { Li } from "../../shared/Container.styled";
class FeedbackOptions extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage, onClick } =
      this.props;
    return (
      <div>
        <Statistics
          onGood={onClick}
          onNeutral={onClick}
          onBad={onClick}
          onClick={onClick}
        />
        <h2>Statistics</h2>
        <ul>
          <Li>Good: {good}</Li>
          <Li>Neutra: {neutral}</Li>
          <Li>Bad: {bad}</Li>
          <Li>
            Total:
            {total}
          </Li>
          <li>Positive Feedback: {positivePercentage}%</li>
        </ul>
      </div>
    );
  }
}

export default FeedbackOptions;

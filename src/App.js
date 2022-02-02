import "modern-normalize/modern-normalize.css";
import React from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
// import Statistics from "./components/Statistics/Statistics";
import { ContainerStyled } from "./shared/Container.styled";
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = (e) => {
    // console.log(e.target.id);
    const name = e.target.id;
    this.setState((prev) => ({ [name]: prev[name] + 1 }));
  };
  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositivePercentage = () => {
    const total = this.countTotal();
    const good = this.state.good;
    return total ? Math.ceil((good / total) * 100) : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const { countTotal, countPositivePercentage, onClick } = this;
    return (
      <ContainerStyled>
        <div className="App">
          <h1>Please leave Feedback</h1>

          <FeedbackOptions
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositivePercentage()}
            onClick={onClick}
          />
        </div>
      </ContainerStyled>
    );
  }
}

export default App;

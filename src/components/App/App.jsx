
import React, { useState } from "react";
import { Feedback } from "../Feadback/Feedback";
import { Section } from "../Section/Section";
import { Statistics } from "../Statistics/Statistics";
import Notification from "components/Notification/Notification";

import { StyledWrapper } from "components/App/Wrapper.styled";

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackVote = (e) => {
    const voteType = e.target.id;
    setVotes((prevState) => ({
      ...prevState,
      [voteType]: prevState[voteType] + 1,
    }));
  };
  /*
    ? Я використав в стейті об'єкт, щоб не робити Світч кейси

    const handleFeedbackVote = (e) => {
      const currentBtnId = e.target.id
      switch (currentBtnId) {
        case 'good':
          setGood((prevState) => prevState + 1);
          break;
        case 'neutral':
          setNeutral((prevState) => prevState + 1);
          break;
        case 'bad':
          setBad((prevState) => prevState + 1);
          break;
        default:
          return;
      }
    }
  */

  const { good, neutral, bad } = votes;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = good / countTotalFeedback();
    return countTotalFeedback() > 0 && percentage
      ? Math.ceil(percentage * 100)
      : 0;
  };

  const total = countTotalFeedback();
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <StyledWrapper>
      <Section title="Dude, leave your feedback:) Please!">
        <Feedback
          onLeaveFeedback={handleFeedbackVote}
          options={["good", "neutral", "bad"]}
        />
      </Section>

      <Section title="Statistics of feedbacks">
        {total !== 0 ? (
          <Statistics
            goodCount={good}
            neutralCount={neutral}
            badCount={bad}
            total={total}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="We are sorry... There is no feedback" />
        )}
      </Section>
    </StyledWrapper>
  );
};

export { App };


import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import css from "./App.module.css"

const getFeedback = () => {
  const savedFeedback = localStorage.getItem("feedback");
  if (savedFeedback !== null) {
    return JSON.parse(savedFeedback);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export default function App() {
  const [feedback, setFeedback] = useState(getFeedback);

  const updateFeedback = (feedbackType) => {
    setFeedback((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const handelReset = () => setFeedback({ good: 0, neutral: 0, bad: 0 });
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handelReset={handelReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? 
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
       : 
        <Notification />
      }
    </div>
  );
}

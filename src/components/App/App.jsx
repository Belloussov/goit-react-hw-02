import { useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

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
    
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;


  return (
    <div>
      <Description />
          <Options updateFeedback={updateFeedback} />
          {totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} /> : <Notification />}
    </div>
  );
}

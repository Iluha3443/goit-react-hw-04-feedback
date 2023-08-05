import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


const Feedback = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);
    

   const  handleClick = (elem) => {
  switch (elem) {
    case 'good':
     setgood(prevState => prevState + 1)
      break;
    case 'neutral':
      setneutral(prevState => prevState + 1 );
      break;
    case 'bad':
      setbad(prevState => prevState + 1 );
      break;
    default:
      console.error(`Invalid value: ${elem}. Only 'good', 'neutral', or 'bad' are allowed.`);
      break;
  }
}

   const countTotalFeedback = () => {
        return good + neutral + bad;
    };

   const countPositiveFeedbackPercentage = () => {     
        const Feed = neutral + bad + good;
        const goodFeed = Feed ? Math.round((good / Feed) * 100) : 0;
        return goodFeed;
    };

   

         return (
           <>
             <Section title="Please leave feedback">    
          <FeedbackOptions options={[good,neutral,bad]} onLeaveFeedback={handleClick} />
        </Section>
             <Section title="Statistics">
               { countTotalFeedback() > 0 ?
                 <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
                 : <Notification message="There is no feedback" />}
        </Section>
      </>
    );
    };


export default Feedback
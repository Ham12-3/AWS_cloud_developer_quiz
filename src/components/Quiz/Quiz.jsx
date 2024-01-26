import React, { useState,useRef } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);

  let [questions, setQuestions] = useState(data[index]);
  let [score, setScore] = useState(0);
  let [lock, setLock] = useState(false);

  let option1 = useRef(null)
  let option2 = useRef(null)
  let option3 = useRef(null)
  let option4 = useRef(null)

  let option_array =[option1,option2,option3,option4]

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(score++);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans-1].current.classList.add("correct")
      }
    }
  };
 

  
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <h1> {score} </h1>
      <hr />
      <h2>
        {index}. {questions.question}
      </h2>
      <ul>
        <li ref={option1}
          onClick={(e) => {
            checkAns(e, 1);
           
          }}
        >
          {question.option1}
        </li>
        <li ref={option2}
          onClick={(e) => {
            checkAns(e, 2);
            
          }}
        >
          {question.option2}
        </li>
        <li ref={option3}
          onClick={(e) => {
            checkAns(e, 3);
            
          }}
        >
          {question.option3}
        </li>
        <li ref={option4}
          onClick={(e) => {
            checkAns(e, 4);
            
          }}
        >
          {question.option4}
        </li>
        <div>
          <button onClick={setIndex(--index)}>Previous</button>
          <button onClick={setIndex(++index)}>Next</button>
        </div>

        <div className="index">1 of 5 questions</div>
      </ul>
    </div>
  );
};

export default Quiz;

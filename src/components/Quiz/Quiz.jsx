import React, { useState, useRef, useEffect } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";
import MeterAnimation from "../animation/Animation";

const Quiz = () => {
  const [index, setIndex] = useState(() => {
    const savedIndex = localStorage.getItem('quizIndex');
    return savedIndex !== null ? parseInt(savedIndex) : 0;
  });
  
  const [question, setQuestion] = useState(() => data[index]);
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem('quizScore');
    return savedScore !== null ? parseInt(savedScore) : 0;
  });
  
  const [result, setResult] = useState(false);
  const [lock, setLock] = useState(false);
  
  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);
  
  const option_array = [option1, option2, option3, option4];
  
  useEffect(() => {
    // Save state to local storage
    localStorage.setItem('quizIndex', index);
    localStorage.setItem('quizScore', score);
  }, [index, score]);
  
  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };
  
  const next = () => {
    if (index === data.length - 1) {
      setResult(true);
      return 0;
    }
    if (lock === true) {
      setIndex(prev => prev + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      
      option_array.forEach(option => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };
  
  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };
  
  return (
    <div className="container">
      <div className="head">
        <h1>Quiz App</h1>
        <h1>Score: {score} </h1>
      </div>
      
      <hr />
      {result ? (
        <>
          {score / data.length >= 0.5 ? (
            <h1>Hello Abdul, keep it upp👍👍👍👍</h1>
          ) : (
            <h1>Awwn 😔😔😔😔 You can do better</h1>
          )}
          
          <MeterAnimation value={score} maxValue={data.length} />
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li
              ref={option1}
              onClick={(e) => {
                checkAns(e, 1);
              }}
            >
              {question.option1}
            </li>
            <li
              ref={option2}
              onClick={(e) => {
                checkAns(e, 2);
              }}
            >
              {question.option2}
            </li>
            <li
              ref={option3}
              onClick={(e) => {
                checkAns(e, 3);
              }}
            >
              {question.option3}
            </li>
            <li
              ref={option4}
              onClick={(e) => {
                checkAns(e, 4);
              }}
            >
              {question.option4}
            </li>
            <div className="buttons">
              <button onClick={next}>Next</button>
            </div>
            
            <div className="index">
              {index + 1} of {data.length} questions
            </div>
          </ul>
        </>
      )}
    </div>
  );
};

export default Quiz;

import React, { useState, useRef } from "react";
import "./Quiz.css";
import { data } from "../../assets/data";
import MeterAnimation from "../animation/Animation"

const Quiz = () => {
  let [index, setIndex] = useState(0);

  let [question, setQuestion] = useState(data[index]);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [lock, setLock] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
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
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
     
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };


const reset =()=> {
  setIndex(0)
  setQuestion(data[0])
  setScore(0)
  setLock(false)
  setResult(false)
}



  return (
    <div className="container">
      <div className="head">
      <h1>Quiz App</h1>
      <h1>Score: {score} </h1>
      </div>
    
      <hr />
      {result ? (
        <>
{
  (score/data.length >= 0.5)? ( <h1>Hello Abdul, keep it upp👍👍👍👍</h1>) :( <h1>Awwn 😔😔😔😔 You can do better</h1>)
}
       
        
    


  <MeterAnimation value={score} maxValue={data.length} />    
  <button onClick={()=> reset()}>Reset</button>




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
             
              <button onClick={() => next()}>Next</button>
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

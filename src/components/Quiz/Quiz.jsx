import React, { useState } from 'react'
import "./Quiz.css"
import { data } from '../../assets/data'

const Quiz = () => {


  let [index, setIndex] = useState(0)

  let [questions, setQuestions] = useState(data[index])
  let [score, setScore] = useState(0)


  const checkAns = (e, ans) => {
    if (question.ans === ans) {
      e.target.classList.add("correct")
     setScore(score++)
    } else {
      e.target.classList.add("wrong")
    }
  }


  // const calculateScore = () => {
  //   // const incrementScore = num => {
  //   //   score += num
  //   //   scoreCounter.innerText = `Score: ${score}`

  //   // }

  //   // const incrementFinal = num => {
  //   //   finalScore += num
  //   //   console.log(finalScore)

  //   // }

  // }

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <h1> {score} </h1>
      <hr />
      <h2>{index + 1}. {questions.question}</h2>
      <ul>
        <li onClick={e => { checkAns(e, 1) }}>{question.option1}</li>
        <li onClick={e => { checkAns(e, 2) }}>{question.option2}</li>
        <li onClick={e => { checkAns(e, 3) }}>{question.option3}</li>
        <li onClick={e => { checkAns(e, 4) }}>{question.option4}</li>
        <div>
        <button>Previous</button>
        <button>Next</button>
        </div>
        
        <div className='index'>
          1 of 5 questions
        </div>
      </ul>
    </div>
  )
}

export default Quiz
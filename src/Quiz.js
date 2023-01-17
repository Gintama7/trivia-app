import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import "./Quiz.css";

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [check, setCheck] = useState(false);
  const [retry, setRetry] = useState(false);
  const [score,setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showAns, setShowAns] = useState(false);


  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((result) => ({
          ...result,
          key: result.question,
          answers: [result.correct_answer, ...result.incorrect_answers].sort(
            () => Math.random() - 0.5
          ),
          //selectedAnswer: "",
        }));
        setQuizData(questions);
      });
  }, [retry]);

  const changeButton = () => {     // For checking score
    setCheck(true);
    setShowAns(true);
  };

  const newQuiz = () =>{      //Try again button functionality
    setRetry(true);
    setCheck(false);
    setShowAns(false);
  }

//calculate the score

  const checkScore=(right_ans,ans,ques,event)=>{  
    let value = false;
    event.currentTarget.disabled = !value;          
    setSelectedAnswer(prev =>{
     return [...prev,ans]
    });                                                 
  if(right_ans === ans){
    setScore(prev => prev+1);
  }
  }

  const displayQuestions =  quizData.map((data)=>{
    return (<Questions question={data.question}
      key={data.key}
      id= {data.question}
      possible_answers ={data.answers}
      correct_answer = {data.correct_answer}
      selectedAnswer = {selectedAnswer}
      checkScore = {checkScore}
      showAns = {showAns}
       />)
  })

  return (
    <div className="quiz">
      {displayQuestions}
      <div className="footer">
        {check ? (
          <>
            You have scored {score}/5 correct answers <button onClick={newQuiz}>Try Again</button>
          </>
        ) : (
          <button onClick={changeButton}>Check Answers</button>
        )}
      </div>
    </div>
  );
}

export default Quiz;

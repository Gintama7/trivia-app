import Quiz from './Quiz';
import './App.css';
import { useState } from 'react';

function App() {

  const [quizPage, setQuizPage] = useState(false);

  function clickHandler(){
    setQuizPage(true);
  }
  return (
    <>
     { quizPage ? <Quiz/> :(<div className="first__page"><h1>Quizzical</h1>
      <h3>Test your trivia knowledge</h3>
      <button onClick={clickHandler}>Start Quiz</button></div>)}
      
    </>
  );
}

export default App;

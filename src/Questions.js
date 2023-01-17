import React from 'react';
import './Questions.css';

function Questions(props) {

  let styles = { backgroundColor: "", color:"black"}

function answerStyle(ans){      // To change the colour of correct answers after check score button is clicked
  if(props.showAns === true)
  {
  return props.correct_answer === ans ? styles ={...styles, backgroundColor:"lightgreen"} : styles = { backgroundColor : ""}
  }
// else{
//   if(props.selectedAnswer === ans)
//   {
//     return styles = {backgroundColor:"#d9ad7c", color:"black"}
//   }
//   }
}



  return (
    <div className='questions'>
      <h2 dangerouslySetInnerHTML={{__html:props.question}} />
      <div className='options'>
      {props.possible_answers.map(answer =>(
        <button id={answer} 
        key={answer} 
        style={styles =answerStyle(answer)}
        onClick={(e)=>props.checkScore(props.correct_answer,answer,props.question,e)} 
        dangerouslySetInnerHTML={{__html:answer}}
        />
      ))}
      </div>
    </div>
  )
}

export default Questions

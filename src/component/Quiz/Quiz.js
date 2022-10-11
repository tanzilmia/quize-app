import React from 'react';

const Quiz = ({questionbank}) => {
     console.log(questionbank);
    let {correctAnswer,options,question,} = questionbank

    const submitAnswer = event => {
       let mysubmit = event.target.innerText
       if(mysubmit === correctAnswer){
        alert(' working')
       }else{
        alert('faltu')
       }
      }
    return (
        <div className='border-3'>
            <h3> {question} </h3>
            {
                options.map(option => <p key = {option.toString()} onClick={submitAnswer}> {option} </p>)
            }
        </div>
    );
};

export default Quiz;
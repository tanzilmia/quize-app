import React from 'react';

const Quiz = ({questionbank}) => {
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
        <div className = 'p-4 border w-full my-2 rounded-md shadow-sm'>
            <h3 className='text-xl text-indigo-800'> {question} </h3>
            <div className='p-2 flex flex-wrap'>
            {
                options.map(option => <p className='cursor-pointer basis-1/2 border w-80 m-1 p-4' key = {option.toString()} onClick={submitAnswer}> {option} </p>)
            }
            </div>
        </div>
    );
};

export default Quiz;
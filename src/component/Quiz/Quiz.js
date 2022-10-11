import React from 'react';

const Quiz = ({questionbank}) => {
    let {correctAnswer,options,question,} = questionbank

   const seeCorrectAns = () =>{
     let correct = options.find(option=> option === correctAnswer)
     if(correct){
        alert(`correct answer is ${correct}`)
     }else{
        alert('not found')
     }
   }

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
            <div className='flex justify-between'>
            <h3 className='text-xl text-indigo-800'> {question} </h3>
            <button onClick={seeCorrectAns} className ='text-indigo-800 text-xl'> <ion-icon name="eye"></ion-icon> </button>
            </div>
            <div className='p-2'>
            {
                options.map(option => <p className='cursor-pointer border md:w-3/5 m-1 p-4' key = {option.toString()} onClick={submitAnswer}> {option} </p>)
            }
            </div>
        </div>
    );
};

export default Quiz;
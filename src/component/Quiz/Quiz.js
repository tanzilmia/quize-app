import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Quiz = ({questionbank,correct,setcorrect,wrong,setwrong}) => {
    let {correctAnswer,options,question,} = questionbank
   const seeCorrectAns = () =>{
     let correct = options.find(option=> option === correctAnswer)
     if(correct){
        toast.success(` Answer : ${correct} `, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
     }
   }

    const submitAnswer = event => {
       let mysubmit = event.target.innerText
       if(mysubmit === correctAnswer){
        let rightans = correct + 1
        setcorrect(rightans)
        toast.success(` correct Answer `, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
       }else{
        let wrongans = wrong + 1
        setwrong(wrongans)
        toast.error('Wrong Answer', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
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
            {/* toaset data */}
            <ToastContainer
               position="top-center"
               autoClose={3000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
                />

            
        </div>
    );
};

export default Quiz;
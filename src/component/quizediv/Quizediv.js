import React,{useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizediv = () => {
    const [correct, setcorrect] = useState(0)
    const [wrong, setwrong] = useState(0)
    let quizes = useLoaderData().data
    console.log(quizes.name);
    let {questions} = quizes
    return (
        <div>
            <h2 className='text-2xl text-center my-5'> Improve Your <span className=' text-green-500 font-bold'>{quizes.name}</span> Skills With Quize </h2>

            
             <h2 className='text-center'> <span> Rigth Ans : {correct}</span> | <span>Wrong Ans : {wrong}</span> </h2>
            
            
 
            <div className= 'flex flex-wrap w-9/12 m-auto'>
                {
                    questions.map(questionbank => <Quiz correct = {correct} setcorrect = {setcorrect} wrong = {wrong} setwrong = {setwrong}   questionbank = {questionbank} key={questionbank.id}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizediv;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizediv = () => {
    let quizes = useLoaderData().data
    console.log(quizes.name);
    let {questions} = quizes
    return (
        <div>
            <h2 className='text-2xl text-center my-5'> Improve Your <span className='t text-green-500'>{quizes.name}</span> Skills With Quize </h2>

            <div className= 'flex flex-wrap w-9/12 m-auto'>
                {
                    questions.map(questionbank => <Quiz questionbank = {questionbank} key={questionbank.id}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizediv;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({topic}) => {
    let {name,logo,total,id} = topic
    let naviget = useNavigate()
    const showQuize = () =>{
        naviget(`/quize/${id}`)
    }
    
    return (
        
            <div className= 'border rounded-lg shadow-md hover:shadow-sm'>
                <div className="b bg-black">
                    <img src= {logo} alt="" />
                </div>
                <div className="p-5">
                    <h3 className='s text-2xl'>{name}</h3>
                   <div className='flex justify-between items-center py-3'>
                   <button onClick={showQuize} className='b bg-green-400 py-2 px-5 rounded-lg text-white font-semibold '>Start Quiz </button>
                   <small className='text-blue-700'>Total: {total} Question</small>
                   </div>
                </div>
            </div>
       
    );
};

export default Topic;
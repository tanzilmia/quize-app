import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({topic}) => {
    // dstructure topic 
    let {name,logo,total,id} = topic
    let naviget = useNavigate()
    const showQuize = () =>{
        naviget(`/quize/${id}`)
    }
    
    return (
        
            <div className= 'border'>
                <div className="b bg-black">
                    <img src= {logo} alt="" />
                </div>
                <div className="p-5">
                    <div className='flex justify-between items-center py-3'>
                    <h3 className='s text-2xl'>{name}</h3>
                    <p> Total : {total} Question </p>
                    </div>
                    <button onClick={showQuize} className='b bg-green-300 py-2 px-5'>See More</button>
                </div>
            </div>
       
    );
};

export default Topic;
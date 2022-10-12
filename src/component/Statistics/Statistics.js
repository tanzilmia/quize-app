import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip  } from 'recharts';

const Statistics = () => {
    let topicsx = useLoaderData()
    let topics = topicsx.data
    console.log(topics);
    return (
        <div className='m-auto md:w-3/6 mt-20'>
             <LineChart width={500} height={300} data={topics} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
             <Line type="monotone" dataKey="total" stroke="#8884d8" />
             <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
             <XAxis dataKey="name" />
             <YAxis />
             <Tooltip />
              </LineChart>
            
        </div>
    );
};

export default Statistics;
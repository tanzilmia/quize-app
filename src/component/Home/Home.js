import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header' 
import Topic from '../Topic/Topic';
const Home = () => {
    let topicx = useLoaderData()
    let topics = topicx.data
    return (
        <div>
            <Header></Header>
            <div className="grid md:grid-cols-4 md:w-5/6 sm:w-4/6 gap-3 m-auto sm:m-auto py-5">
                {
                    topics.map(topic => <Topic topic = {topic} key = {topic.id}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;
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
            <div className="flex">
                {
                    topics.map(topic => <Topic topic = {topic} key = {topic.id}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;
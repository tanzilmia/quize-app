import React from 'react';

const Blog = () => {
    return (
        <div className='w-9/12 m-auto my-4'>
            <div>
            <h2 className='t text-2xl my-2 text-cyan-500'>What is the purpose of react router </h2>
            <p> <strong>Answer :</strong> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div>
                <h2 className='t text-2xl my-2 text-cyan-500'>How does Context API work</h2>
                <p> <strong>Answer :</strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                
            </div>
            <div>
                <h2 className='t text-2xl my-2 text-cyan-500'>What is useRef hook in react </h2>
                <p> <strong>Answer :</strong> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly</p>
            </div>
        </div>
    );
};

export default Blog;
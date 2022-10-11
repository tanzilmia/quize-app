import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header text-center'>
            <h1 className='text-white text-center mt-9 text-5xl font-semibold'>Today Learn , Tomorrow Be a Leader</h1>
            
            <button className='b bg-green-500 py-3 px-5 rounded-md text-center mt-8 text-lime-50'>Explore More</button>
            
        </div>
    );
};

export default Header;
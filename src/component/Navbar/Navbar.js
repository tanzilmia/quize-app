import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
const [open, setopen] = useState(false)

    return (
        <div className='shadow-md w-full top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
              <div className=' font-bold text-4xl cursor-pointer flex items-center text-green-500'>
                x - Quize
              </div>

              <div onClick={()=> setopen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
              <ion-icon name= {open ? 'close' : 'menu'}></ion-icon>
             
              </div>

              <ul className= {`ul_tag md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20': 'top-[-500px]' }`}>

                <NavLink className='md:ml-8 my-5 md:my-0 text-xl text-gray-800 hover:text-gray-400 duration-500  block' to= '/'>Home</NavLink>
                <NavLink className='md:ml-8 my-5 md:my-0 text-xl text-gray-800 hover:text-gray-400 duration-500  block' to= '/statistics'>Statistics</NavLink>
                <NavLink className='md:ml-8 my-5 md:my-0 text-xl text-gray-800 hover:text-gray-400 duration-500  block' to= '/blog'>Blog </NavLink>
              </ul>
            </div>
        </div>
    );
};

export default Navbar;
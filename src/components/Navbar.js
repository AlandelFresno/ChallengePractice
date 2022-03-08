import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

export const Navbar = () => {


  return (
      <div className='bg-black text-white fixed top-0 flex w-screen justify-between items-center'>
        <div className=' flex item-center'>
          <Link 
             to='/'
            className='border-2 border-white rounded-xl a_navbar m-1 ml-4 mt-1 p-1 no-underline text-lg'
          >Home</Link>
          <Link 
            to='/about' 
            className='border-2 border-white rounded-xl a_navbar m-1 ml-4 mt-1 p-1 no-underline text-lg'
          >About</Link>
          <button 
          onClick={() => {
            localStorage.setItem('auth', false);
          }}
            className='border-2 border-white rounded-xl a_navbar m-1 ml-4 mt-1 p-1 no-underline text-lg'
          > Logout</button>
        </div>
        <div>
          <Link
            to='/login'
            className=' border-2 border-white button_navbar m-1 mr-4 pt-1 pl-2 pr-2 pb-1 rounded-lg text-lg  '
          >Login</Link>
        </div>
      </div>
  );
};

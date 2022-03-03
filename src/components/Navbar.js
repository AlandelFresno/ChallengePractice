import React from 'react';
import './components.css';

export const Navbar = () => {
  return (
      <div className='bg-black text-white fixed top-0 flex w-screen justify-between items-center'>
        <div className=' flex item-center'>
          <a href="/" className='border-2 border-white rounded-xl a_navbar m-1 ml-4 mt-1 p-1 no-underline text-lg'>Home</a>
          <a href="/" className='border-2 border-white rounded-xl a_navbar m-1 ml-4 mt-1 p-1 no-underline text-lg'>About</a>
        </div>
        <div>
          <button
           className=' border-2 border-white button_navbar m-1 mr-4 pt-1 pl-2 pr-2 pb-1 rounded-lg text-lg  '
           >Login</button>
        </div>
      </div>
  );
};

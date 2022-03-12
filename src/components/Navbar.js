import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { LogOut } from '../redux/actions/auth';
import './components.css';
import SearchBar from './SearchBar';

export const Navbar = () => {

  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };


  return (
    <div className='navbar_container bg-black text-white fixed top-0 flex w-screen justify-between items-center'>

      <div className='link_container flex item-center'>
        <Link 
          to='/'
          className='border-2 border-white rounded-xl a_navbar m-1 ml-4 mt-1 p-1 no-underline text-lg'
        >Home</Link>
        <Link 
          to='/courses' 
          className='courses_link border-2 border-white rounded-xl a_navbar m-1 ml-4 mt-1 p-1 no-underline text-lg'
        >Courses</Link>
        <button 
          onClick={() => {
            dispatch(LogOut());
          }}
          className='logout_button border-2 border-white rounded-xl a_navbar m-1 ml-4 mt-1 p-1 no-underline text-lg'
        > Logout</button>
        <form onSubmit={handleSubmit}>
          <SearchBar />
        </form>
      </div>
          {
            (!token ? (
              <div>
                <Link
                  to='/login'
                  className='login_button border-2 border-white button_navbar m-1 mr-4 pt-1 pl-2 pr-2 pb-1 rounded-lg text-lg  '
                >Login</Link>
              </div>
            ): 
            (
              <div>
                <p className='login_button border-2 border-white p_navbar m-1 mr-4 pt-1 pl-2 pr-2 pb-1 rounded-lg text-lg'  >Hello</p>
              </div>
            ))
    
          }
    </div>
  );
};

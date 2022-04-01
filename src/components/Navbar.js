import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { LogOut } from '../redux/actions/auth';
import { obtain } from '../redux/actions/search';
import './components.css';
import SearchBar from './SearchBar';

export const Navbar = (token) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const {value} = useSelector(state => state.search);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(obtain(e.target[0].value));
    navigate('/search');
  };

  const handleCondition = () => {

    if ( location.pathname === '/search') {
      return (<></>);
    } else if ( token.token ) {
      return (
        <form className='searchbar pt-1 pl-4' onSubmit={handleSubmit}>
          <SearchBar placeholder={value}/>
        </form>
      );
    } else {
      return ( <></> );
    };
  };
  
  console.log(location);


  return (
    <div 
      className='navbar_container bg-black 
                text-white fixed top-0 flex w-screen 
                justify-between items-center
                pb-1'
    >

      <div className='link_container flex item-center'>
        <Link 
          to='/'
          className='border-2 border-white rounded-xl a_navbar m-1 ml-4 mt-1 p-1 no-underline text-lg'
        >Home</Link>
        <button 
          onClick={() => {
            dispatch(LogOut());
            navigate('/login');
            window.location.reload(false);
          }}
          className='logout_button border-2 border-white rounded-xl a_navbar m-1 ml-4 mt-1 p-1 no-underline text-lg'
        > Logout</button>
          
         {
          handleCondition()
          //  ( token.token ? (
          //     <form className='searchbar pt-1' onSubmit={handleSubmit}>
          //       <SearchBar placeholder={value}/>
          //     </form>
          //  ): (
          //     <></>
          //  ))
         } 
      </div>   
      <div>
        <Link
          to='/login'
          className='login_button border-2 border-white button_navbar m-1 mr-4 pt-1 pl-2 pr-2 pb-1 rounded-lg text-lg  '
        >Login</Link>
      </div>
    </div>
  );
};

import React from 'react';
import  {   
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import CoursesPage from '../pages/CoursesPage';
import ErrorPage from '../pages/ErrorPage';
import { MainPage } from '../pages/MainPage';
import SearchPage from '../pages/SearchPage';


const PrivateRoute = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/home'/>}/>
      <Route exact path='/home' element={<MainPage/>}/>
      <Route exact path='/login' element={<Navigate to='/home'/>}/>
      <Route exact path='/courses' element={<CoursesPage />} />
      <Route exact path='/search' element={<SearchPage/>} />
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
  );
};

export default PrivateRoute;
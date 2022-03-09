import React from 'react';
import  {   
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Error from '../pages/Error';
import { MainPage } from '../pages/MainPage';


const PrivateRoute = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/home'/>}/>
      <Route exact path='/home' element={<MainPage/>}/>
      <Route exact path='/login' element={<Navigate to='/home'/>}/>
      <Route path="*" element={<Error />}/>
    </Routes>
  );
};

export default PrivateRoute;
import React from 'react';
import  {   
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Error from '../pages/Error';
import { LoginScreen } from '../pages/login/LoginScreen';
import { MainPage } from '../pages/main/MainPage';


const PrivateRoute = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Navigate to='/home'/>}/>
      <Route exact path='/home' element={<MainPage/>}/>
      <Route path="*" element={<Error />}/>
    </Routes>
  );
};

export default PrivateRoute;
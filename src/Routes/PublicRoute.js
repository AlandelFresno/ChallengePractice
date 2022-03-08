import React from 'react';
import  {   
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { LoginScreen } from '../pages/login/LoginScreen';

const PublicRoute = () => {
  return (
      
    <Routes>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path="*" element={<Navigate to='/login'/>}/>
    </Routes>

  );
};

export default PublicRoute;
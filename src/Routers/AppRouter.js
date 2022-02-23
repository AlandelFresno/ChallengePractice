import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../pages/login/LoginScreen";
import { MainPage } from "../pages/main/MainPage";



export const AppRouter = () => {
    return (
        <Router >
            <Routes>
                <Route path='/login' element={<LoginScreen/>}/>
                <Route extact path='/' element={<MainPage/>}/>
            </Routes>
        </Router>
    );
};

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { LoginScreen } from "../pages/login/LoginScreen";
import { MainPage } from "../pages/main/MainPage";



export const AppRouter = () => {
    return (
        <Router >
            <Navbar />
            <Routes>
                <Route exact path='/' element={<MainPage/>}/>
                <Route exact path='/login' element={<LoginScreen/>}/>
                <Route path="*" element={<LoginScreen/>}/>
            </Routes>
        </Router>
    );
};

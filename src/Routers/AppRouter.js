import  {   BrowserRouter as Router,
            Route,
            Routes,
            Navigate
        } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { LoginScreen } from "../pages/login/LoginScreen";
import { MainPage } from "../pages/main/MainPage";



export const AppRouter = () => {

    const state = {
        isUserAuthenticated: true
    };

    return (
        <Router >
            <Navbar />
            <Routes>
                {/* <Route
                    exact path='/' 
                    render = {() => {
                        return (
                            state.isUserAuthenticated ?
                            <Navigate to='/home' /> :
                            <Navigate to='/login'/>                        
                        );
                    }}
                /> */}
                <Route exact path='/' element={<Navigate to='/home'/>}/>
                <Route exact path='/home' element={<MainPage/>}/>
                <Route exact path='/login' element={<LoginScreen/>}/>
                <Route path="*" element={<LoginScreen/>}/>
            </Routes>
        </Router>
    );
};

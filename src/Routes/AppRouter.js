import  {   
        BrowserRouter as Router,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";



export const AppRouter = () => {
    
    const isAuth = localStorage.getItem('auth');

    console.log(isAuth);

    return (
        <Router >
            <Navbar />
            {
                (isAuth ? (
                    <PrivateRoute />
                ): (
                    <PublicRoute />
                ))
            }
        </Router>
    );
};

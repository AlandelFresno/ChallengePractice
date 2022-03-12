import { useSelector } from "react-redux";
import  {   
        BrowserRouter as Router,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";



export const AppRouter = () => {
    
    const token = useSelector(state => state.auth.login);

    // console.log(token);

    return (
        <Router >
            <Navbar />
            
            {
                (token ? (
                    <PrivateRoute />
                ): (
                    <PublicRoute />
                ))
            }
        </Router>
    );
};

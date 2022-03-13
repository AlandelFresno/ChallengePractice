import { useSelector } from "react-redux";
import  {   
        BrowserRouter as Router,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";



export const AppRouter = () => {
    
    let token = false;
    const tokenRedux = useSelector(state => state.auth.login);
    const tokenStore = (localStorage.getItem('auth') === 'true');

    if (tokenRedux || tokenStore === true) {
        token = true;
    };

    return (
        <Router >
            <Navbar token={token}/>
            
            {
                ( token ? (
                    <PrivateRoute />
                ): (
                    <PublicRoute />
                ))
            }
        </Router>
    );
};

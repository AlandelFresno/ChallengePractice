import { useDispatch, useSelector } from "react-redux";
import  {   
        BrowserRouter as Router,
} from "react-router-dom";
import { Navbar } from "../components/Navbar";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { startMenu } from '../redux/actions/menu';


export const AppRouter = () => {
    
    let boolForToken = false;
    const tokenRedux = useSelector(state => state.auth.login);
    const tokenStore = (localStorage.getItem('auth') === 'true');

    const dispatch = useDispatch();
    dispatch(startMenu());

    if (tokenRedux || tokenStore === true) {
        boolForToken = true;
    };


    return (
        <Router >
            <Navbar token={boolForToken}/>
            
            {
                ( boolForToken ? (
                    <PrivateRoute />
                ): (
                    <PublicRoute />
                ))
            }
        </Router>
    );
};

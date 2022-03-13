import { types } from '../types';


export const logIn = () => {

    localStorage.setItem('auth', true);

    return {
        type: types.authLogin,
        token: true
    };
};

export const LogOut = () => {
    
    localStorage.setItem('auth', false);

    return {
        type: types.authLogOut,
        token: false
    };
};

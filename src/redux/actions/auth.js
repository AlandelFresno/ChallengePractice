import { types } from '../types';


export const logIn = () => ({
    type: types.authLogin
});

export const LogOut = () => ({
    type: types.authLogOut
});

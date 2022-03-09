import { types } from '../types';


const initialState = {
    login: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.authLogin:
            return {
                ...state,
                login: true
            };
        case types.authLogOut:
            return {
                ...state,
                login: false
            };
    
        default:
            return state;

    };
};
import { types } from '../types';


const initialState = {
    value: ''
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.searchObtain:
            return {
                state
            };
        case types.search:
            return {
                ...state,
                login: false
            };
    
        default:
            return state;

    };
};
import { types } from '../types';


const initialState = {
    value: ''
}

export const searchReducer = (state = initialState, action) => {


    switch (action.type) {
        
        case types.searchObtain:
            return {
                ...state,
                value: action.data
            };
        case types.search:
            return {
                state
            };
    
        default:
            return state;

    };
};
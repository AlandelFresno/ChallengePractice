import { types } from '../types';


const initialState = {
    action: {
        type: '',
        menuData: []
    }  
};

export const menuReducer = (state = initialState, action) => {

    // console.log(action);
    
    switch (action.type) {
        
        case types.menuData:
            return {
                ...state,
                action
            };
    
        case types.updateMenu:
            return {
                ...state,
            };

        default:
            return state;
    };
};
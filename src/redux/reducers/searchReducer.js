import { types } from '../types';


const initialState = {
    searchInput: '',
    saveData: [],
}

export const searchReducer = (state = initialState, action) => {


    switch (action.type) {
        
        case types.searchObtain:
            return {
                ...state,
                searchInput: action.searchInput
            };
        case types.searchSaveData:
            return {
                ...state,
                data: action.data
            };
    
        default:
            return state;

    };
};
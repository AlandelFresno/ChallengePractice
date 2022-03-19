import { types } from '../types';


export const obtain = (searchInput) => {


    console.log(searchInput);

    return {
        type : types.searchObtain,
        searchInput
    };
};

export const saveData = (data) => {

    console.log(data);

    return {
        type: types.searchSaveData,
        saveData: data
    };
};

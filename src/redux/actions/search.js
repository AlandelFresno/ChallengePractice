import { types } from '../types';


export const obtain = (searchInput) => {


    // console.log(searchInput);

    return {
        type : types.searchObtain,
        searchInput
    };
};

export const saveData = (data) => {

    // console.log(data);
    localStorage.setItem('id', data.id);
    localStorage.setItem('image', data.image);
    localStorage.setItem('title', data.tile);

    return {
        type: types.searchSaveData,
        data
    };
};

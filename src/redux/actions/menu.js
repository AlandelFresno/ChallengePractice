import { types } from '../types';
import mockdata from '../../assets/MOCK_DATA2.json';

export const startMenu = () => {
  
    const {results} = mockdata;
    const menu = results.slice(0, 12);

    return{
        type: types.menuData,
        menuData: menu
    };
};

export const updateMenu = () => {


    
    return {
        type: types.updateMenu,

    };
};

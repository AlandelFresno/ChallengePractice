import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { searchReducer } from './searchReducer';
import { menuReducer } from './menuReducer';

const rootReducers = combineReducers({
    auth : authReducer,
    search: searchReducer,
    menu: menuReducer
});

export default rootReducers;
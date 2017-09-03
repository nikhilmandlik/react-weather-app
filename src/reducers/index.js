import { combineReducers } from 'redux';
import myReducer from './my-reducer';

const RootReducer = combineReducers({
        searchterm: myReducer
    });

export default RootReducer;

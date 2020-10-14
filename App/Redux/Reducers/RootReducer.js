import {combineReducers} from 'redux';
import todoReducer from '../Reducers/Todo_Reducer';

export default combineReducers({todoReducer: todoReducer});

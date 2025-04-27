import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';  // Example reducer

const rootReducer = combineReducers({
    categories: categoriesReducer,  // Add any other reducers here
});

export default rootReducer;
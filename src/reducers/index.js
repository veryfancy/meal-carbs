import { combineReducers } from 'redux';
import foodEntries from './foodEntries';

const mealCarbsApp = combineReducers({
    foodEntries
});

export default mealCarbsApp;
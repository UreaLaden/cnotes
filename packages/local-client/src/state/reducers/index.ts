import cellsReducer from './cellsReducer';
import {combineReducers} from 'redux';
import bundlesReducer from './bundleReducer';

const reducers = combineReducers({
    cells:cellsReducer,
    bundles:bundlesReducer
});

export default reducers;

/*Defines the type of reducer*/
export type RootState = ReturnType<typeof reducers>;
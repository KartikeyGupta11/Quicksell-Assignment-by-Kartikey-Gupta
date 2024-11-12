import {configureStore} from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './HelperFunctions/Reducer';

const store = configureStore({
    reducer : {
        DataReducer, SelectDataReducer
    }
})

export default store;
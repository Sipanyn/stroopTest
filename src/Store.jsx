import { configureStore } from "@reduxjs/toolkit";
import QuestionReducer from './StateSlice';


export const store=configureStore(
    {reducer:{question:QuestionReducer}
})
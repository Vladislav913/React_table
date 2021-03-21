import { combineReducers } from 'redux';

import {TypedUseSelectorHook, useSelector} from "react-redux";
import {table} from "./table";


export const rootReducer = combineReducers({
    table
});

export type RootState = ReturnType<typeof rootReducer>


export const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector



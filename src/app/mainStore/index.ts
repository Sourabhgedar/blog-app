import { blogApiSlice } from '../rtk/mainQuery';
import { configureStoreInit } from '../rtk';
import { combineReducers } from '@reduxjs/toolkit';

export const appReducer = combineReducers({
    [blogApiSlice.reducerPath]: blogApiSlice.reducer,
});

export const store = () =>
    configureStoreInit<RootState>({
        appReducer,
        middleware: [],
    });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<typeof appReducer>;

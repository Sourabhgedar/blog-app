import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Middleware, Reducer, configureStore, UnknownAction } from '@reduxjs/toolkit';
import { storeMiddleware } from './middlewares';
export * from './mainQuery';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let store: any = null;

export function configureStoreInit<T>({
  appReducer,
  middleware,
}: {
  appReducer: Reducer<T, UnknownAction>;
  middleware?: Middleware[];
}) {
  store = configureStore({
    reducer: appReducer,
    middleware: (defaultMiddleWares) => storeMiddleware(defaultMiddleWares, middleware),
  });
  setupListeners(store.dispatch);
  return store;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export * from './types/index.d';

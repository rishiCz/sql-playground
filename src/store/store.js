import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import tableReducer from './slices/tableSlice';

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

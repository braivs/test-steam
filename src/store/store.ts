// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import {elementReducer} from "./slices/elementSlice"

export const store = configureStore({
  reducer: {
    elements: elementReducer,
  },
});

// Типы для состояния и диспетчера
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

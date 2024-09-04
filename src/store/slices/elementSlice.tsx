// src/store/slices/elementSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../store"

export type Element = {
  id: number
  color: string
}

export type ElementState = {
  elements: Element[];
}

const initialState: ElementState = {
  elements: []
};

const elementSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    addElement: (state) => {
      const newElement: Element = {
        id: Date.now(),
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
      };
      state.elements.unshift(newElement); // Добавляем элемент в начало
    },
    removeElement: (state) => {
      state.elements.pop(); // Удаляем последний элемент
    }
  }
});

export const { addElement, removeElement } = elementSlice.actions;
export const selectElements = (state: RootState) => state.elements.elements;
export const elementReducer = elementSlice.reducer;

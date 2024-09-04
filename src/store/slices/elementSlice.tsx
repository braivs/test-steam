// src/store/slices/elementSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Element {
  id: number;
  color: string;
}

interface ElementState {
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
export const elementReducer = elementSlice.reducer;

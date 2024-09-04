// src/components/ElementList.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addElement, removeElement } from '../store/slices/elementSlice';
import { Element } from '../store/slices/elementSlice';
import s from './ElementList.module.css'
import {RootState} from "../store/store"

const ElementList: React.FC = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state: RootState) => state.elements.elements);
  const [animate, setAnimate] = useState(false);

  const handleAdd = () => {
    setAnimate(true); // Запуск анимации добавления
    dispatch(addElement());
  };

  const handleRemove = () => {
    setAnimate(false); // Запуск анимации удаления
    dispatch(removeElement());
  };

  return (
    <div className={s.container}>
      <div className={s.buttons}>
        <button onClick={handleAdd}>Добавить</button>
        <button onClick={handleRemove}>Удалить</button>
      </div>
      <div className={s.listContainer}>
        <div className={`${s.list} ${animate ? s.animate : ''}`}>
          {elements.map((element: Element) => (
            <div
              key={element.id}
              className={s.listItem}
              style={{ backgroundColor: element.color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElementList;

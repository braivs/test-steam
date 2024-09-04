// src/components/ElementList.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addElement, removeElement } from '../store/slices/elementSlice';
import { Element } from '../store/slices/elementSlice';
import styles from './ElementList.module.css'
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
    <div className={styles.container}>
      <div>HI from ElementList</div>
      <div className={styles.buttons}>
        <button onClick={handleAdd}>Добавить</button>
        <button onClick={handleRemove}>Удалить</button>
      </div>
      <div className={styles.listContainer}>
        <div className={`${styles.list} ${animate ? styles.animate : ''}`}>
          {elements.map((element: Element) => (
            <div
              key={element.id}
              className={styles.listItem}
              style={{ backgroundColor: element.color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElementList;

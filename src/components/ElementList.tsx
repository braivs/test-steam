import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {addElement, removeElement, selectElements,} from '../store/slices/elementSlice'
import { Element } from '../store/slices/elementSlice';
import styles from './ElementList.module.css';

const ElementList: React.FC = () => {
  const dispatch = useDispatch();
  const elements = useSelector(selectElements);

  const handleAdd = () => {
    dispatch(addElement());
  };

  const handleRemove = () => {
    dispatch(removeElement());
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button onClick={handleAdd}>Добавить</button>
        <button onClick={handleRemove}>Удалить</button>
      </div>
      <div className={styles.listContainer}>
        <TransitionGroup className={styles.list}>
          {elements.map((element: Element) => (
            <CSSTransition
              key={element.id}
              timeout={500}
              classNames={{
                enter: styles.itemEnter,
                enterActive: styles.itemEnterActive,
                exit: styles.itemExit,
                exitActive: styles.itemExitActive,
              }}
            >
              <div
                className={styles.listItem}
                style={{ backgroundColor: element.color }}
              ></div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default ElementList;

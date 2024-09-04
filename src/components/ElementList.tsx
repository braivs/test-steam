import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {addElement, removeElement, selectElements,} from '../store/slices/elementSlice'
import { Element } from '../store/slices/elementSlice';
import s from './ElementList.module.css';

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
    <div className={s.container}>
      <div className={s.buttons}>
        <button onClick={handleAdd}>Добавить</button>
        <button onClick={handleRemove}>Удалить</button>
      </div>
      <div className={s.listContainer}>
        <TransitionGroup className={s.list}>
          {elements.map((element: Element) => (
            <CSSTransition
              key={element.id}
              timeout={500}
              classNames={{
                enter: s.itemEnter,
                enterActive: s.itemEnterActive,
                exit: s.itemExit,
                exitActive: s.itemExitActive,
              }}
            >
              <div
                className={s.listItem}
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

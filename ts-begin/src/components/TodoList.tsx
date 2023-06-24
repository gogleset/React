import React from 'react';
import Todo from '../models/todo';

const TodoList: React.FC<{
  item: Todo;
  onClick: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li key={props.item.id} onClick={props.onClick} id={props.item.id}>
      {props.item.text}
    </li>
  );
};

export default TodoList;

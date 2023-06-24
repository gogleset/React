import React from 'react';
import Todo from '../models/todo';
import TodoList from './TodoList';
// type todoProps

const Todos: React.FC<{
  items: Todo[];
  onClick: (event: React.MouseEvent) => void;
}> = (props) => {
  /**
   * React.FC는 리액트 패키지에 내장된 다른 타입정의이다. 함수형 컴포넌트로 동작한다는걸 명시하는 것이다. 기본적으로 children 타입이 내장되어 있고, 제네릭 타입이다. 리액트 함수형 컴포넌트라는걸 typescript로 명시하고, 함수형 컴포넌트의 제약사항을 걸어줌,
   * React.FC는 props 객체의 기본타입과, children 프로퍼티와 합쳐줌
   * 다음 설정해줄 제네릭값은 props 값이다.
   */
  return (
    <ul>
      {props.items.map((item) => (
        <TodoList item={item} key={item.id} onClick={props.onClick} />
      ))}
    </ul>
  );
};

export default Todos;

import React, { useContext, useRef } from 'react';
import { TodosContext } from '../store/todos-context';
// 사용자 새로운 할일 목록 받는 컴포넌트
const NewTodo: React.FC = (props) => {
  // const todoTextInputRef = useRef<HTMLInputElement>(null); //타입스크립트는 입력창에 연결될 걸 인지하지 못함 그래서 제네릭으로 html 요소에 맞는 ref타입을 명시해 줘야됨, 그리고 기본값을 설정해줘야 한다. 보통 null
  const todoCtx = useContext(TodosContext);

  return (
    <form onSubmit={todoCtx.addTodo}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoCtx.todoInputRef} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;

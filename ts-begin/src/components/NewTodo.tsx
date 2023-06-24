import React, { useRef } from 'react';
import Todo from '../models/todo';

// 사용자 새로운 할일 목록 받는 컴포넌트
const NewTodo: React.FC<{
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // React hook 타입
}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null); //타입스크립트는 입력창에 연결될 걸 인지하지 못함 그래서 제네릭으로 html 요소에 맞는 ref타입을 명시해 줘야됨, 그리고 기본값을 설정해줘야 한다. 보통 null

  const submitHandler = (event: React.FormEvent) => {
    //React에서 쓰는 이벤트 타입중 하나
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value; //?는 옵셔널체이닝 값이 없을때 오류없이 출력, !는 forced 무조건적으로 값이 있을때 설정

    //   값이 없을때
    if (enteredText.trim().length === 0) {
      return;
    }
    //새로운 객체 생성
    const newTodos = new Todo(enteredText);
    //   app.tsx에서 받은 state변경함수로 업데이트
    props.setTodos((prev) => {
      return [...prev, newTodos];
    });
    // 새롭게 하기
    todoTextInputRef.current!.value = '';
    todoTextInputRef.current?.focus();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;

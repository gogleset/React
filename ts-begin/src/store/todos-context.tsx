import React, { useState, useRef } from 'react';
import Todo from '../models/todo';

// 타입정의
type TodoContextObject = {
  items: Todo[];
  addTodo: (event: React.FormEvent) => void;
  removeTodo: (event: React.MouseEvent) => void; //제네릭 타입정의
  todoInputRef: React.Ref<HTMLInputElement>;
};
// 콘텍스트 api 기본 밸류 설정
const TodosContext = React.createContext<TodoContextObject>({
  items: [],
  addTodo: (event: React.FormEvent) => {},
  removeTodo: (event: React.MouseEvent) => {},
  todoInputRef: null,
});

// context tsx 생성
const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoTextInputRef = useRef<HTMLInputElement>(null); //타입스크립트는 입력창에 연결될 걸 인지하지 못함 그래서 제네릭으로 html 요소에 맞는 ref타입을 명시해 줘야됨, 그리고 기본값을 설정해줘야 한다. 보통 null

  // 클릭했을때 해당 밸류 삭제
  const todosOnClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const currentId = event.currentTarget.id;
    setTodos((prev) => {
      // event.currentTarget.id value.id
      return prev.filter((value) => value.id !== currentId);
    });
  };

  const submitHandler = (event: React.FormEvent) => {
    // //React에서 쓰는 이벤트 타입중 하나
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value; //?는 옵셔널체이닝 값이 없을때 오류없이 출력, !는 forced 무조건적으로 값이 있을때 설정
    //   값이 없을때
    if (enteredText.trim().length === 0) {
      return;
    }
    //새로운 객체 생성
    const newTodos = new Todo(enteredText);
    //   app.tsx에서 받은 state변경함수로 업데이트
    setTodos((prev) => {
      return [...prev, newTodos];
    });
    // 새롭게 하기
    todoTextInputRef.current!.value = '';
    todoTextInputRef.current?.focus();
  };

  const contextValue: TodoContextObject = {
    items: todos,
    addTodo: submitHandler,
    removeTodo: todosOnClickHandler,
    todoInputRef: todoTextInputRef, //ref설정
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodoContextProvider, TodosContext };

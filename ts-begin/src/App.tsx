import { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // 클릭했을때 해당 밸류 삭제
  const todosOnClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    const target = event.currentTarget.id;
    setTodos((prev) => {
      const result = prev.filter((value) => target !== value.id);
      console.log(result);
      return [...result];
    });
  };
  return (
    <div>
      <NewTodo setTodos={setTodos} />
      <Todos items={todos} onClick={todosOnClickHandler} />
    </div>
  );
}

export default App;

/**
 * class는 타입의 역할도한다. ts에선 생성자와 타입의 역할을 한다고 보면됨
 */

class Todo {
  id: string;
  text: string;
  // 생성자
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;

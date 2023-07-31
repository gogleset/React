/**
 * @gogleset container component
 */
import { useState, useEffect } from "react";
import Components from "../components/Components";

// type setting
export interface ContainerType {
  json: {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
  };
}

// container -> component(props)
// container는 presentation component에 관여할 state를 관리한다.
const Container = () => {
  const [data, setData] = useState<ContainerType>();
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setData((prev) => {
          return { ...prev, json };
        });
      });
  }
  return <Components data={data} />;
};

export default Container;

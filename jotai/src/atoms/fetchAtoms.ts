import { atom } from "jotai";

const fetchDummyData = atom(async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export { fetchDummyData };

import { atom } from "jotai";

const fetchDummyAtom = atom(async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const userIdAtom = atom(1);

const fetchUserIdAtom = atom(async (get) => {
  const userId = get(userIdAtom);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}?_delay=2000`
  );
  return response.json();
});

export { fetchDummyAtom, fetchUserIdAtom, userIdAtom };

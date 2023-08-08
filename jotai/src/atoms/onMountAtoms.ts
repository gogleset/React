import { atom } from "jotai";
type ActionType = { type: "init" | "inc" | undefined };

// const mountAtom = atom(1); // initial state
const mountAtom = atom<string>(""); //async initial state


// const derivedAtom = atom(
//   (get) => get(mountAtom),
//   (get, set, action: ActionType) => {
//     if (action.type === "init") {
//       set(mountAtom, 10);
//     } else if (action.type === "inc") {
//       set(mountAtom, (current: number) => {
//         console.log(current);
//         return current + 1;
//       });
//     } else {
//       set(mountAtom, 100);
//     }
//   }
// );

// derivedAtom.onMount = (setAtom) => {
//   //useEffect를 대체할 수 있어 useEffect의 예상치 못한 사이드 이펙트를 방지
//   //atom이 처음 올려질 시점에 할 로직 작성
//   setAtom({ type: "init" });

//   return () => {
//     setAtom({ type: undefined });
//   };
// };

const fetchInitData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await data.json();
};
const fetchIncData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  return await data.json();
};
const derivedAsyncAtom = atom(
  (get) => get(mountAtom),
  async (get, set, action: ActionType) => {
    if (action.type === "init") {
      // set(mountAtom, 10);
      console.log("type: init");
      const result = await fetchInitData();
      console.log(result);
      set(mountAtom, JSON.stringify(result));
    } else if (action.type === "inc") {
      console.log("type: inc");
      const result = await fetchIncData();
      console.log(result);
      set(mountAtom, JSON.stringify(result));
    } else {
      console.log();
      set(mountAtom, "ㅜㅜ");
    }
  }
);

derivedAsyncAtom.onMount = (setAtom) => {
  //useEffect를 대체할 수 있어 useEffect의 예상치 못한 사이드 이펙트를 방지
  //atom이 처음 올려질 시점에 할 로직 작성
  setAtom({ type: "init" });

  return () => {
    setAtom({ type: undefined });
  };
};
export {
  mountAtom,
  // derivedAtom,
  derivedAsyncAtom,
};

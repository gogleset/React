import { atom } from "jotai";
type ActionType = { type: "init" | "inc" };

const countAtom = atom(1);
const derivedAtom = atom(
  (get) => get(countAtom),
  (get, set, action: ActionType) => {
    if (action.type === "init") {
      set(countAtom, 10);
    } else if (action.type === "inc") {
      set(countAtom, (current: number) => {
        console.log(current);
        return current + 1;
      });
    } else {
      set(countAtom, 100);
    }
  }
);

derivedAtom.onMount = (setAtom) => {
  //atom이 처음 올려질 시점에 할 로직 작성
  setAtom({ type: "init" });
};

export { countAtom, derivedAtom };

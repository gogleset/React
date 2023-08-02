import { atom } from "jotai";
const counterAtom = atom(0); //initial state

// readonly Atom
/**
 * 현재 get으로 부르고 있는 readOnlyDoubleCounterAtom의
 * type을 보면 Atom<number> 인데,타입에 따라 같은 useAtom이어도 리턴하는 객체가 다르다.
 */
const readOnlyDoubleCounterAtom = atom((get) => get(counterAtom) * 2);

// Write Atom
  const writeOnlyThreeCounterAtom = atom(null, (get, set) => set(counterAtom, 3)); // 쓰기만 가능한 value를 만들 수 있다.

//readWrite Atom
const decrementCountAtom = atom(
  (get) => get(counterAtom), // get 함수는 기존의 atom 값을 읽을 수 있는 함수이고,
  (get, set) => set(counterAtom, get(counterAtom) - 1) // set함수는 기존의 atom 의 값을 변화시킬 수 있는 함수이다.
  // _arg 는 이후 set함수의 인자값을 의미한다. (현재 이 예시에선 사용되지 않음)
);

export {
  counterAtom,
  decrementCountAtom,
  writeOnlyThreeCounterAtom,
  readOnlyDoubleCounterAtom,
};

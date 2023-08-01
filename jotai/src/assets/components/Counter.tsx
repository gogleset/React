import React from "react";
import { atom, useAtom } from "jotai";

const counter_atom = atom(0); //initial state

//readWrite Atom
const decrement_count_atom = atom(
  (get) => get(counter_atom), // get 함수는 기존의 atom 값을 읽을 수 있는 함수이고,
  (get, set, _arg) => set(counter_atom, get(counter_atom) - 1) // set함수는 기존의 atom 의 값을 변화시킬 수 있는 함수이다.
  // _arg 는 이후 set함수의 인자값을 의미한다. (현재 이 예시에선 사용되지 않음)
);
const Counter = () => {
  const [count, setCount] = useAtom(counter_atom); // initial state로 받은 값을 useAtom에 넣어주면 현재 value와 setValue가 출력된다.
  const [decrementCount, decrement] = useAtom(decrement_count_atom);
  // 위 예제에 이어서
  /**
   * 현재 get으로 부르고 있는 readOnlyDoubleCounterAtom의
   * type을 보면 Atom<number> 인데,타입에 따라 같은 useAtom이어도 리턴하는 객체가 다르다.
   */
  const readOnlyDoubleCounterAtom = atom((get) => get(counter_atom) * 2);

  function DoubleCounterAtom() {
    const [doubledCount] = useAtom(readOnlyDoubleCounterAtom);
    return <h2>{`read only ${doubledCount}`}</h2>;
  }

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>One Up</button>
      <div>{count}</div>
      <hr />
      <h4>Double Up!</h4>
      <DoubleCounterAtom />
      <hr />
      <h4>Decrease Down! {decrementCount}</h4>
      <button onClick={decrement}>One Down!</button>
    </div>
  );
};

export default Counter;

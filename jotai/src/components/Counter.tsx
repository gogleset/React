import { useAtom } from "jotai";
import {
  counterAtom,
  decrementCountAtom,
  writeOnlyThreeCounterAtom,
  readOnlyDoubleCounterAtom,
} from "../atoms/counterAtoms";
import { mountAtom } from "../atoms/onMountAtoms";

const Counter = () => {
  const [count, setCount] = useAtom(counterAtom); // initial state로 받은 값을 useAtom에 넣어주면 현재 value와 setValue가 출력된다.
  const [decrementCount, decrement] = useAtom(decrementCountAtom); //get, set으로 설정한 값이 들어간다.
  const [, setThree] = useAtom(writeOnlyThreeCounterAtom); //writeonly
  const [doubledCount] = useAtom(readOnlyDoubleCounterAtom); //readonly
  const [mount] = useAtom(mountAtom);

  return (
    <div>
      <h2 style={{ color: "violet" }}>Counter.tsx</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>One Up</button>
      <div>{count}</div>
      <hr />
      <h4>Double!</h4>
      <h2>{`read only ${doubledCount}`}</h2>
      <hr />
      <div>{decrementCount}</div>
      <button onClick={decrement}>One Down!</button>
      <hr />
      <div>
        <button onClick={setThree}>Set Three!</button>
      </div>
      <h4>Mount!</h4>
      <h2>{`mount Atom ${mount}`}</h2>

      <h4 style={{ color: "orange" }}>basic get, set, useAtom example</h4>
    </div>
  );
};

export default Counter;

import {
  mountAtom,
  // derivedAtom
  derivedAsyncAtom,
} from "../atoms/onMountAtoms";
import { useAtom } from "jotai";
const Mount = () => {
  const [mount] = useAtom(mountAtom);
  const [derived, setDerived] = useAtom(derivedAsyncAtom);
  // const [derived, setDerived] = useAtom(derivedAtom);

  return (
    <div>
      <h2 style={{ color: "blueviolet" }}>Mount.tsx</h2>
      <div>
        <h4>mountAtom : {`${mount}`}</h4>
      </div>
      {/* <div>derivedAtom : {derived}</div>

      <button
        onClick={() => {
          setDerived({ type: "inc" });
        }}>
        1 plus
      </button> */}

      <div>derivedAsyncAtom : {`${derived}`}</div>

      <button
        onClick={() => {
          setDerived({ type: "inc" });
        }}>
        fetch!
      </button>

      <h4 style={{ color: "orange" }}>.onMount example</h4>
    </div>
  );
};

export default Mount;

import { countAtom, derivedAtom } from "../atoms/onMountAtoms";
import { useAtom } from "jotai";
const Mount = () => {
  const [mount] = useAtom(countAtom);
  const [derived, setDerived] = useAtom(derivedAtom);

  return (
    <div>
      <h2 style={{ color: "blueviolet" }}>Mount.tsx</h2>
      <div>
        <h4>countAtom : {mount}</h4>
      </div>
      <div>derivedAtom : {derived}</div>

      <button
        onClick={() => {
          setDerived({ type: "inc" });
        }}>
        1 plus
      </button>

      <h4 style={{ color: "orange" }}>.onMount example</h4>
    </div>
  );
};

export default Mount;

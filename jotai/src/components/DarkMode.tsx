import { darkModeOn, darkModeOff, darkModeAtom } from "../atoms/darkModeAtoms";
import { useAtom } from "jotai";

const DarkMode = () => {
  const [mode] = useAtom(darkModeAtom);
  const [, setDarkModeOn] = useAtom(darkModeOn);
  const [, setDarkModeOff] = useAtom(darkModeOff);

  return (
    <div>
      <h2 style={{ color: "blueviolet" }}>DarkMode.tsx</h2>
      <div>
        <h4>darkModeAtom current State : {`${mode}`}</h4>
      </div>
      <div>
        <button onClick={setDarkModeOn}>Dark mode On</button>
      </div>
      <div>
        <button onClick={setDarkModeOff}>Dark mode Off</button>
      </div>
      <h4 style={{ color: "orange" }}>
        .atomWithStorage example
        <br /> LocalStorage 확인해주세요
      </h4>
    </div>
  );
};

export default DarkMode;

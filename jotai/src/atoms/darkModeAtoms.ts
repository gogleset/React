import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const darkModeAtom = atomWithStorage("darkMode", false);

//writeonly mode
const darkModeOff = atom(null, (get, set) => {
  set(darkModeAtom, false);
});
const darkModeOn = atom(null, (get, set) => {
  set(darkModeAtom, true);
});

export { darkModeAtom, darkModeOff, darkModeOn };

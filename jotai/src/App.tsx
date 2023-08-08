import "./App.css";
import Counter from "./components/Counter";
import Fetch from "./components/Fetch";
import Mount from "./components/Mount";
import DarkMode from "./components/DarkMode";
import { Suspense } from "react";

function App() {
  return (
    <main>
      <Counter />
      <hr />
      {/* 비동기 수행 중일때 예외처리 */}
      <Suspense fallback='Loading...'>
        <Fetch />
      </Suspense>
      <hr />

      <Mount />
      <hr />
      <DarkMode />
    </main>
  );
}

export default App;

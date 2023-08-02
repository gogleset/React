import "./App.css";
import Counter from "./components/Counter";
import Fetch from "./components/Fetch";
import Mount from "./components/Mount";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <main>
      <Counter />
      <hr />
      <Fetch />
      <hr />
      <Mount />
      <hr />
      <DarkMode />
    </main>
  );
}

export default App;

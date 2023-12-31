import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Mcpn from "./MyCPN/Mcpn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          temporibus commodi a totam labore facilis culpa iste velit aliquid
          eveniet explicabo rerum harum eligendi molestiae necessitatibus
          nostrum, incidunt nihil autem.
        </p>
      </div>

      <Mcpn title={"This is props from App.tsx"} descr={"This Descript"} />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

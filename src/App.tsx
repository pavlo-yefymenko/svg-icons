import { Icon } from "@/components/ui";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Test Svg Icons</h1>
      <div className="card">
        <Icon name="arrow-left" />
        <Icon name="arrow-right" />
      </div>
    </>
  );
}

export default App;

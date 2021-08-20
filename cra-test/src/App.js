import logo from "./logo.svg";
import "./App.css";

function App() {
  function getData() {
    import("./data.json").then(({ default: data }) => {
      console.log(data);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getData}>데이터 가져오기</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

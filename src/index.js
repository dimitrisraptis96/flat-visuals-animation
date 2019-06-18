import React from "react";
import ReactDOM from "react-dom";

import "./flatty.css";
import Flatty from "./Flatty";

function App() {
  return (
    <div className="App">
      <Flatty />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

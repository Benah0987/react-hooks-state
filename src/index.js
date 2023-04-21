import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import Discounter from "./components/Discounter";

ReactDOM.render(
  <div>
    <Counter />
    <Discounter />
  </div>,
  document.getElementById("root")
);

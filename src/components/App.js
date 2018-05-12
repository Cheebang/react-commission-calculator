import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CommissionCalculatorContainer from "./commission-calculator/CommissionCalculatorContainer";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Commission Calculator</h1>
    </header>
    <CommissionCalculatorContainer />
  </div>
);

export default App;

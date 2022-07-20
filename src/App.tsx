import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {


  return (
    <div>
      <Header />
      <div className="p-6"></div>
      <Grid />
    </div>
  );
}

export default App;

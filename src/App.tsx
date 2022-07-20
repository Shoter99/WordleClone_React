import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {

  const [grid, setGrid] = useState<string[][]>(
    [
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
    ]
  )


  const onKeyDown = (e: any) => {
    console.log(e)
  }


  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, true)
  }, [])


  return (
    <div >
      <Header />
      <div className="p-6"></div>
      <Grid grid={grid}/>
    </div>
  );
}

export default App;

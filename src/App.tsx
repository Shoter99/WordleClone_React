import React, { useEffect, useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0)


  const onKeyDown = (e: any) => {
    let key : string = e.key;
    const pattern = /[a-z]/i;
    
    if(key.length != 1 || !pattern.test(key)) return
    let newGrid = [...grid];
    newGrid[0][currentIndex] = key;

    setGrid(newGrid);
    addNewLetter(key);
    
  }
  const addNewLetter = (letter : string) => {
    let newGrid = [...grid];
    console.log(newGrid);
    
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

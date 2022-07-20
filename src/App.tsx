import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";

function App() {

  const [grid, setGrid] = useState(
    [
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
    ]
  );
  let currentRow = 0


  const onKeyDown = (e: any) => {
    let key : string = e.key;
    const pattern = /[a-z]/i;
    let newGrid = [...grid];
    if(key === "Backspace"){
      setGrid(deleteLastOne(newGrid))
    }
    if(key === "Enter" && checkIfRowIsFull(grid)){
      console.log(currentRow);
      
      currentRow+=1;
    }
    if(key.length !== 1 || !pattern.test(key)) return
    setGrid(addNewLetter(key, newGrid))
    
  }

  const checkIfRowIsFull = (grid: string[][]) => {
    for(let i = 0; i < 5; i++){
      if(grid[currentRow][i] === "") return false;
    }
    return true;
  }

  const deleteLastOne = (grid : string[][]) => {
    for(let i = 4; i >= 0; i--){
      if(grid[currentRow][i] !== ''){
        grid[currentRow][i] = '';
        return grid;
      }
    }
    return grid;
  }


  const addNewLetter = (letter : string, grid : string[][]) => {
        for(let j = 0; j < 5; j++){
          if(grid[currentRow][j] === ""){
            grid[currentRow][j] = letter;
            return grid
          }
      }
    
      return grid
    
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

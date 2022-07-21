import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Grid from "./components/Grid";
import {words} from "./utils/words";
import EndScreen from "./components/EndScreen";
import Keyboard from "./components/Keyboard";
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
  const [winScreen, setWinScreen] = useState(false);
  const [loseScreen, setLoseScreen] = useState(false);
  const [wordToDisplay, setWordToDisplay]  = useState("");
  let word:string;
  let currentRow = 0;


  const onKeyDown = (e: any) => {
    let key : string = e.key;
    const pattern = /[a-z]/i;
    let newGrid = [...grid];
    if(key === "Backspace"){
      setGrid(deleteLastOne(newGrid))
    }
    if(key === "Enter" && checkIfRowIsFull(grid)){
      checkGuess(grid[currentRow], word);
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

  const checkGuess = (gridRow: string[], word: string) => {
    let correctGuesses = 0;
    for(let i = 0; i < 5; i++){
      let gridCell = document.querySelector(`#cell${currentRow}${i}`)?.classList;
      if(gridRow[i] === word[i]){
        gridCell?.add("bg-green-500");
        correctGuesses+=1;
      }
      else if(word.includes(gridRow[i])){
        gridCell?.add("bg-yellow-500");
      }
      else{
        gridCell?.add("bg-gray-500");
      }
    }
    if(correctGuesses === 5){
      setWinScreen(true);
      setWordToDisplay(word);
    }else{
      if(currentRow===5){
        setLoseScreen(true);
        setWordToDisplay(word);
      }
    }
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
    
    let rand = Math.floor(Math.random() * 246)
    
    word = words[rand];

    document.addEventListener("keydown", onKeyDown, true)

  }, [])


  return (
    <div >
      <Header />
      <div className="p-6"></div>
      {winScreen ? <EndScreen text="You won!" word={wordToDisplay}/> : loseScreen ? <EndScreen word={wordToDisplay} text="You lost"/> :
      <>
        <Grid grid={grid}/>
        <Keyboard />
      </>
      }
    </div>
  );
}

export default App;

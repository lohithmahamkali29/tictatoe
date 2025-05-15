import React, { useState } from 'react'
import './App.css'

function App() {

 /*function checkWinner() {
  const cells = [];
  for (let i = 1; i <= 9; i++) {
    cells.push(document.getElementById('cell' + i).innerHTML);
  }

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  
    [0, 4, 8], [2, 4, 6]              
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      alert(`${cells[a]} wins!`);
      disableAllCells();
      setTimeout(() => window.location.reload(), 2000); // auto restart after 2 seconds
      return;
    }
  }

  if (cells.every(cell => cell !== '')) {
    alert("It's a draw!");
    setTimeout(() => window.location.reload(), 1000); // auto restart after 2 seconds
  }
}
*/
function checkWinner() {
  const cells = [];
  for (let i = 1; i <= 9; i++) {
    cells.push(document.getElementById('cell' + i).innerHTML);
  }

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      alert(`${cells[a]} wins!`);
      disableAllCells();
      setTimeout(resetGame, 1000); // clean reset
      return;
    }
  }

  if (cells.every(cell => cell !== '')) {
    alert("It's a draw!");
    setTimeout(resetGame, 1000); 
  }
}

function disableAllCells() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById('cell' + i).style.pointerEvents = 'none';
  }
}

function resetGame() {
  for (let i = 1; i <= 9; i++) {
    const cell = document.getElementById('cell' + i);
    cell.innerHTML = '';
    cell.style.pointerEvents = 'auto';
  }
  document.getElementById('heading').innerText = 'Tic Tac Toe';
}



  const [player, setPlayer] = useState('O');

  const clickHandler = (cellid) => {
    const cell = document.getElementById(cellid);
    if (cell.innerHTML !== '') return;

    cell.innerHTML = player;
    checkWinner();
    
    setPlayer(player === 'O' ? 'X' : 'O');
  }

  return (
    <div className='container'> 
      <h1 id='heading'>Tic Tac Toe</h1>
      <div className='game-cont'>
        <div className="cell" id='cell1' onClick={() => clickHandler("cell1")}></div>
        <div className="cell" id='cell2' onClick={() => clickHandler("cell2")}></div>
        <div className="cell" id='cell3' onClick={() => clickHandler("cell3")}></div>
        <div className="cell" id='cell4' onClick={() => clickHandler("cell4")}></div>
        <div className="cell" id='cell5' onClick={() => clickHandler("cell5")}></div>
        <div className="cell" id='cell6' onClick={() => clickHandler("cell6")}></div>
        <div className="cell" id='cell7' onClick={() => clickHandler("cell7")}></div>
        <div className="cell" id='cell8' onClick={() => clickHandler("cell8")}></div>
        <div className="cell" id='cell9' onClick={() => clickHandler("cell9")}></div>
      </div> 
      <button id='rest' onClick={() => window.location.reload()}>Restart</button>
    </div>
  )
}

export default App



import { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./utils/calculateWinner";

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status =
    winner === "draw"
      ? "It's a draw!"
      : winner
      ? `Winner: ${winner}`
      : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleSquareClick(i) {
    if (squares[i] || winner) return; // ignore if already filled or game over
    const next = squares.slice();
    next[i] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  function reset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <Board squares={squares} onSquareClick={handleSquareClick} />

      {winner && (
        <div className="actions">
          <button onClick={reset}>Play Again</button>
        </div>
      )}
    </div>
  );
}
import Square from "./Square";

export default function Board({ squares, onSquareClick }) {
  return (
    <div className="board">
      {[0, 1, 2].map((r) => (
        <div className="row" key={r}>
          {[0, 1, 2].map((c) => {
            const i = r * 3 + c;
            return (
              <Square
                key={i}
                value={squares[i]}
                onClick={() => onSquareClick(i)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

import "../index.css";
import Square from "./Square";
export default function Board({ xIsNext, squares, onPlay }) {
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  }

  const winner = calculateWinner(squares);
  let status;
  let alert;
  if (winner) {
    status = "Winner is " + winner;
    alert = "success";
  } else {
    status = "Next player is " + (xIsNext ? "X" : "O");
    alert = "warning";
  }
  const isFull = squares.every((square) => square !== null);
  if (isFull) {
    status = "Sorry the match is Draw";
    alert = "danger";
  }

  return (
    <>
      <h2 className="my-3">My OX Game Let's Play together</h2>

      <div className={`alert alert-${alert} text-center`} role="alert">
        {status}
      </div>
      <div className="grid-container">
        <Square
          value={squares[0]}
          handleSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          handleSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          handleSquareClick={() => {
            handleClick(2);
          }}
        />
        <Square
          value={squares[3]}
          handleSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          handleSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          handleSquareClick={() => {
            handleClick(5);
          }}
        />
        <Square
          value={squares[6]}
          handleSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          handleSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          handleSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
}

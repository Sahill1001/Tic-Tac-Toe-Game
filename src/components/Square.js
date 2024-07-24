
export default function Square({ value, handleSquareClick }) {

  return (
    <button className="square" onClick={handleSquareClick}>
      {value}
    </button>
  );
}

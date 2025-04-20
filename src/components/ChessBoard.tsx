
import { useState } from "react";

type ChessPiece = {
  type: string;
  color: 'white' | 'black';
  symbol: string;
};

const initialBoard: (ChessPiece | null)[][] = [
  [
    { type: 'rook', color: 'black', symbol: '♜' },
    { type: 'knight', color: 'black', symbol: '♞' },
    { type: 'bishop', color: 'black', symbol: '♝' },
    { type: 'queen', color: 'black', symbol: '♛' },
    { type: 'king', color: 'black', symbol: '♚' },
    { type: 'bishop', color: 'black', symbol: '♝' },
    { type: 'knight', color: 'black', symbol: '♞' },
    { type: 'rook', color: 'black', symbol: '♜' },
  ],
  Array(8).fill(null).map(() => ({ type: 'pawn', color: 'black', symbol: '♟' })),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null).map(() => ({ type: 'pawn', color: 'white', symbol: '♙' })),
  [
    { type: 'rook', color: 'white', symbol: '♖' },
    { type: 'knight', color: 'white', symbol: '♘' },
    { type: 'bishop', color: 'white', symbol: '♗' },
    { type: 'queen', color: 'white', symbol: '♕' },
    { type: 'king', color: 'white', symbol: '♔' },
    { type: 'bishop', color: 'white', symbol: '♗' },
    { type: 'knight', color: 'white', symbol: '♘' },
    { type: 'rook', color: 'white', symbol: '♖' },
  ],
];

export default function ChessBoard() {
  const [board] = useState(initialBoard);

  return (
    <div className="chess-board border border-gray-300 rounded-md overflow-hidden shadow-lg max-w-md mx-auto">
      {board.map((row, rowIndex) => (
        row.map((piece, colIndex) => {
          const isLight = (rowIndex + colIndex) % 2 === 0;
          return (
            <div 
              key={`${rowIndex}-${colIndex}`} 
              className={`chess-square ${isLight ? 'chess-square-light' : 'chess-square-dark'}`}
            >
              {piece && <span className={`text-${piece.color === 'white' ? 'gray-900' : 'gray-900'}`}>{piece.symbol}</span>}
            </div>
          );
        })
      ))}
    </div>
  );
}

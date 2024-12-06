import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill('white')));
  const [clickOrder, setClickOrder] = useState([]); 

  const handleClick = (row, col) => {
    if (matrix[row][col] === 'white') {
      const newMatrix = matrix.map((r, i) =>
        i === row
          ? r.map((cell, j) => (j === col ? 'green' : cell))
          : r
      );
      setMatrix(newMatrix);
      setClickOrder([...clickOrder, { row, col }]);

    
      if (row === 2 && col === 2) {
        changeToOrangeSequentially();
      }
    }
  };

  const changeToOrangeSequentially = () => {
    clickOrder.forEach(({ row, col }, index) => {
      setTimeout(() => {
        setMatrix((prevMatrix) =>
          prevMatrix.map((r, i) =>
            i === row
              ? r.map((cell, j) => (j === col ? 'orange' : cell))
              : r
          )
        );
      }, index * 500); 
    });
  };

  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              className="cell"
              style={{ backgroundColor: color }}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;

import "./App.css";
import React, { useState } from 'react';

const App: React.FC = () => {
  const [rowCount, setRowCount] = useState('');
  const [colCount, setColCount] = useState('');
  const [table, setTable] = useState<JSX.Element | null>(null);

  const handleGenerateTable = () => {
    const rows = parseInt(rowCount);
    const cols = parseInt(colCount);
    if (isNaN(rows) || isNaN(cols) || rows < 1 || rows > 20 || cols < 1 || cols > 20) {
      alert('Please enter valid numbers between 1 and 20 for both row and column count.');
      return;
    }
    const tableData = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(<td className="border px-4 py-2" key={`${i}-${j}`}>{`${i + 1}-${j + 1}`}</td>);
      }
      tableData.push(<tr key={i}>{row}</tr>);
    }
    setTable(
      <table className="table-auto border-collapse border border-gray-300 mt-4">
        <tbody>{tableData}</tbody>
      </table>
    );
  };

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-gray-100 p-4">
      <h1 className="mb-4 text-sm">Input row count and column count</h1>
      <div className="mb-4 flex flex-row items-center">
        <label className="mb-2 text-sm font-medium text-gray-700 w-44">Row Count:</label>
        <input
          type="text"
          placeholder="1-20"
          value={rowCount}
          onChange={(e) => setRowCount(e.target.value)}
          className="border p-2 rounded text-right w-20"
        />
      </div>
      <div className="mb-4 flex flex-row items-center">
        <label className="mb-2 text-sm font-medium text-gray-700 w-44">Column Count:</label>
        <input
          type="text"
          placeholder="1-20"
          value={colCount}
          onChange={(e) => setColCount(e.target.value)}
          className="border p-2 rounded text-right w-20"
        />
      </div>
      <button
        onClick={handleGenerateTable}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
       Click to Generate Table
      </button>
      <div className="mt-4">
        {table}
      </div>
    </div>
  );
};

export default App;
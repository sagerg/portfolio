import React, { useEffect, useState } from "react";

/**
 * Custom Grid for handling displayed text in a grid format
 * @param {Array} data 2D array representing a table for divs
 * @param {number} minWidth minimum width for the table
 * @param {number} minHeight minimum height for the table 
 * @returns React.JSX.Element
 */
const Grid = ({ data = undefined, minWidth = "100%", minHeight = "0" }) => {

  const [isDataValid, setDataValid] = useState(true);

  const validateDataProp = () => {
    let rowLengths = new Set();
    for (const row of data) {
      if (row) {
        rowLengths.add(row.length);
      }
    }
    setDataValid(rowLengths.size === 1);
  };

  useEffect(() => {
    if (data !== undefined) {
      validateDataProp();
    }
  }, []);

  return (
    <>
      {isDataValid ?
        <div style={{ display : "table", minWidth : minWidth, minHeight : minHeight }}>
          {data.map((row, i) => {
            return (
              <div key={i} style={{ display : "table-row" }}>
                {row.map((cell, j) => {
                  return (
                    <div key={j} style={{ display : "table-cell" }}>
                      {cell}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        : <p>{"Invalid data prop"}</p>
      }
    </>
  );
};

export default Grid;
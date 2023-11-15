import React from 'react';
import Cell from './Cell';
import { GridProvider } from './Grid';
import Counter from './Counter';
import './ClickProject.css';


function ClickProject() {
  return (
    <GridProvider>
      <div>My Home Page</div>
      <div className="app">
        <div className="counter">Counts: <Counter /></div>
        <div className="grid">
          {/* {Array.from({ length: 2 }, (_, row) => ( */}
          {/* <div key={row} className="row">
              {Array.from({ length: 2 }, (_, col) => (
                <Cell key={col} row={row} col={col} />
              ))}
            </div> */}
          {/* ))} */}
          {Array.from({ length: 4 }, (_, index) => (
            <Cell key={index} row={Math.floor(index / 2)} col={index % 2} />
          ))}
        </div>
      </div>
    </GridProvider>
  );
}
export default ClickProject;

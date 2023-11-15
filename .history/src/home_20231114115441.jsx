import React from 'react';
import Cell from './Cell';
import { GridProvider } from './Grid';
import Counter from './Counter';
import './Home.css';


function Home() {
  return (
    <GridProvider>
      <div>My Home Page</div>
      <div className="app">
        <div className="counter">Counts: <Counter /></div>
        <div className="grid">
          
          {Array.from({ length: 4 }, (_, index) => (
                      <Cell key={index} row={Math.floor(index / 2)} col={index % 2} />
          ))}
        </div>
      </div>
    </GridProvider>
  );
}
export default Home;

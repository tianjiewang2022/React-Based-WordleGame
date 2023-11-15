import React from 'react';
import Cell from './Cell';
import { GridProvider } from './Grid';
import Counter from './Counter'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
  return (
    <GridProvider>
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
    <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </Router>
  );
}
export default App;


const App = () => {
  return (
    
  );
};

export default App;

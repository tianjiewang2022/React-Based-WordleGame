// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Navigation from './Navigation'; // Import the Navigation component

const App = () => {
    return (
        <Router>
            <div>
                {/* Use the Navigation component here */}
                <Navigation />

                <hr />
                {/* Use the Switch and Routes as before */}
                {/* <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch> */}
            </div>
        </Router>
    );
};

export default App;

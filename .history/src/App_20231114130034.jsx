import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h2>App Page</h2>
            <p>Click the buttons to navigate:</p>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/contact">
                <button>Contact</button>
            </Link>
        </div>
    );
};

export default App;


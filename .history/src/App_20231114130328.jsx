import React from 'react';
import { Link } from 'react-router-dom';
import ClickProject from "./ClickProject/App";
import WordleProject from './WordleProject/App';

const App = () => {
    return (
        <div>
            <h2>App Page</h2>
            <p>Click the buttons to navigate ʕ •ᴥ•ʔ</p>
            <Link to="/ClickProject">
                <button>ClickProject</button>
            </Link>
            <Link to="/WordleProject">
                <button>ClickProject</button>
            </Link>
        </div>
    );
};

export default App;


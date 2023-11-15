// App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import your CSS file

const App = () => {
    return (
        <div className="app-container">
            <h2 className="app-title">Tianjie Wang Web App Page</h2>
            <p className="app-description">Click the buttons to navigate ʕ •ᴥ•ʔ</p>
            <div className="button-container">
                <Link to="/ClickProject" className="navigation-link" data-tooltip="ClickProject">
                    <button className="navigation-button">Click  Project</button>
                </Link>
                <Link to="/WordleProject" className="navigation-link" data-tooltip="/WordleProject">
                    <button className="navigation-button">Wordle Project</button>
                </Link>
            </div>
        </div>
    );
};

export default App;

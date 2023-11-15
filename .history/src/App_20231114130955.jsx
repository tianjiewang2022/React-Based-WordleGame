// App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import your CSS file

const App = () => {
    return (
        <div className="app-container">
            <h2 className="app-title">App Page</h2>
            <p className="app-description">Click the buttons to navigate ʕ •ᴥ•ʔ</p>
            <div className="button-container">
                <Link to="/ClickProject" className="navigation-link">
                    <button className="navigation-button" data-tooltip="ClickProject">ClickProject</button>
                </Link>
                <Link to="/WordleProject" className="navigation-link">
                    <button className="navigation-button" data-tooltip="WordleProject">WordleProject</button>
                </Link>
            </div>
        </div>
    );
};

export default App;

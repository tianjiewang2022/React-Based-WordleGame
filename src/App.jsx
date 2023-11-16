import { Link } from 'react-router-dom';
import './App.css';
// import { useState } from "react";
import { useUserContext } from './Login/useContext';


const App = () => {
    const { username, score } = useUserContext();
    return (
        <div className="app-container">
            <h2 className="app-title">Tianjie Wang Web App Page</h2>

            <div className="app-description">
                {username
                    ? <>
                        <div className="app-description">Welcome to Game, {username}! 🎉 Your Score: {score}</ div>
                        <div className="app-description">
                            Next Step: Click the buttons to navigate ʕ •ᴥ•ʔ</div>
                    </>
                    : 'Welcome to Game! Please log in first ʕ •ᴥ•ʔ'}</div>
            <div className="button-container">
                <Link
                    to="/LoginPage"
                    className="navigation-link"
                >
                    <button className="navigation-button">Signup / Login</button>
                </Link>

                <Link
                    to="/ClickProject"
                    className="navigation-link"
                >
                    <button className="navigation-button">Click  Project</button>
                </Link>
                <Link
                    to="/WordleProject"
                    className="navigation-link"
                >
                    <button className="navigation-button">Wordle Project</button>
                </Link>

            </div>
        </div >
    );
};

export default App;

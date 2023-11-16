/* eslint-disable react/prop-types */
import React from 'react';
import './game.css';
import { UserProvider, useUserContext } from '../../Login/useContext';

const RenderGamePage = ({
    userInput,
    feedback,
    attempts,
    showCongratulations,
    errorMessage,
    onInputChange,
    onSubmitWord,
    onResetGame,
    remainingAttempts,
    selectedWord,
}) => {
    const { username, score } = useUserContext();
    return (
        <div className="center-container">
            <h2 className="app-title">Welcome to Wordle Game, {username}!</h2>
            <h2 className="app-title"> your score: {score} 🎉</h2>
            <p>Remaining attempts: {remainingAttempts}</p>
            <div className="word-input">
                {userInput.map((value, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            maxLength="1"
                            value={value}
                            className={`input-block ${feedback[index]}`}
                            onChange={(e) => onInputChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>

            <div className="button-container">
                {showCongratulations ? (
                    <div>
                        <span role="img" aria-label="celebration" style={{ color: 'red' }}>
                            🎉
                        </span>
                        <p>Congratulations! Would you like to try again?</p>
                        <button className="navigation-button" onClick={onResetGame}>
                            Try Again
                        </button>
                    </div>
                ) : (
                    <>
                        <button className="navigation-button" onClick={onSubmitWord}>
                            Submit
                        </button>
                        <button className="navigation-button" onClick={onResetGame}>
                            Reset
                        </button>
                    </>
                )}
            </div>
            {/* Display the error message */}
            {errorMessage && (
                <div style={{ color: 'red', marginBottom: '20px' }}>
                    {errorMessage}
                </div>
            )}

            {attempts >= (attempts + remainingAttempts) && (
                <div>
                    <p>
                        Game Over! The correct answer was: <strong>{selectedWord}</strong>
                    </p>
                    <button className="navigation-button" onClick={onResetGame}>
                        Try Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default RenderGamePage;

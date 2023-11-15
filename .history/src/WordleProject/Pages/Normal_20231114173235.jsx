import React, { useState } from 'react';
import './game.css';


const Normal = () => {
    const [userInput, setUserInput] = useState(['', '', '', '', '', '']);

    const handleInputChange = (index, value) => {
        const newInput = [...userInput];
        newInput[index] = value;
        setUserInput(newInput);
    };

    const submitWord = () => {
        const word = userInput.join('').toLowerCase();
        console.log('Submitted Word:', word);
        // Add your logic to check the submitted word
    };

    const resetGame = () => {
        setUserInput(['', '', '', '', '', '']);
    };

    return (
        <div className="center-container">
            <div className="word-input">
                {userInput.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={value}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                ))}
            </div>

            <div className="button-container">
                <button className="navigation-button" onClick={submitWord}>Submit</button>
                <button className="navigation-button" onClick={resetGame}>Reset</button>
            </div>

            {/* Add other UI elements for displaying attempts, clues, etc. */}
        </div>
    );
};

export default Normal;

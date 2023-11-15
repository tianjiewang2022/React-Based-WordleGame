import React, { useState } from 'react';

const Normal = () => {
    const [userInput, setUserInput] = useState(['', '', '', '', '', '']);

    const handleInputChange = (index, value) => {
        // Update the state with the new input value
        const newInput = [...userInput];
        newInput[index] = value;
        setUserInput(newInput);
    };

    const submitWord = () => {
        // Combine the user input to form the word
        const word = userInput.join('').toLowerCase();
        console.log('Submitted Word:', word);

        // Add your logic to check the submitted word
        // For now, let's just log it to the console
    };

    const resetGame = () => {
        // Reset the user input to empty
        setUserInput(['', '', '', '', '', '']);
    };

    return (
        <div>
            <div className="word-input">
                {/* You can use the input elements for users to input the 6-letter word */}
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

            <button className="navigation-button" onClick={submitWord}>Submit</button>
            <button className="navigation-button" onClick={resetGame}>Reset</button>

            {/* Add other UI elements for displaying attempts, clues, etc. */}
        </div>
    );
};

export default Normal;

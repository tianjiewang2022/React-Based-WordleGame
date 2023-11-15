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
        // Add your logic to check the length of the submitted word
        if (word.length < 6) {
            // Update the UI to display a message for a short word
            alert('Word is too short. Please submit a longer word.');
            // You can add other UI updates as needed
            return; // Do not deduct any attempts for a short word
        }
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

import React, { useState, useEffect } from 'react';
import './game.css';

const Normal = () => {
    const [userInput, setUserInput] = useState(['', '', '', '', '', '']);
    const [selectedWord, setSelectedWord] = useState('');
    const [feedback, setFeedback] = useState(Array(6).fill('')); // to track feedback for each block

    useEffect(() => {
        const words = ['random', 'banana', 'yellow', 'jacket', 'purple', 'turtle', 'guitar', 'window', 'hidden', 'planet'];
        const randomIndex = Math.floor(Math.random() * words.length);
        setSelectedWord(words[randomIndex]);
    }, []);

    const handleInputChange = (index, value) => {
        const newInput = [...userInput];
        newInput[index] = value;
        setUserInput(newInput);
    };

    const submitWord = () => {
        const word = userInput.join('').toLowerCase();
        console.log('Submitted Word:', word);

        // Check the length of the submitted word
        if (word.length < 6) {
            alert('Word is too short. Please submit a longer word.');
            return;
        }

        // Compare the submitted word with the selected word
        const newFeedback = word.split('').map((char, index) => {
            if (!selectedWord.includes(char)) {
                return 'gray';
            } else if (selectedWord[index] !== char) {
                return 'yellow';
            } else {
                return 'green';
            }
        });

        setFeedback(newFeedback);
    };

    const resetGame = () => {
        setUserInput(['', '', '', '', '', '']);
        setFeedback(Array(6).fill(''));
    };

    return (
        <div className="center-container">
            <div className="word-input">
                {userInput.map((value, index) => (
                    <div
                        key={index}
                        className={`input-block ${feedback[index]}`}
                    >
                        <input
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>

            <div className="button-container">
                <button className="navigation-button" onClick={submitWord}>
                    Submit
                </button>
                <button className="navigation-button" onClick={resetGame}>
                    Reset
                </button>
            </div>


        </div>
    );
};

export default Normal;

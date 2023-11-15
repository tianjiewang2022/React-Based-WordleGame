import React, { useState, useEffect } from 'react';
import './game.css';

const Normal = () => {
    const [userInput, setUserInput] = useState(['', '', '', '', '', '']);
    const [selectedWord, setSelectedWord] = useState('');
    const [feedback, setFeedback] = useState(Array(6).fill('')); // to track feedback for each block
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        resetGame();
    }, []); // Initial reset when the component mounts

    useEffect(() => {
        if (attempts >= 6) {
            alert('Game Over! Would you like to reset the game?');
            resetGame();
        }
    }, [attempts]);



    const resetGame = () => {
        const words = ['random', 'banana', 'yellow', 'jacket', 'purple', 'turtle', 'guitar', 'window', 'hidden', 'planet'];
        const randomIndex = Math.floor(Math.random() * words.length);
        setSelectedWord(words[randomIndex]);
        setUserInput(['', '', '', '', '', '']);
        setFeedback(Array(6).fill(''));
        setAttempts(0);
    };

    const handleInputChange = (index, value) => {
        const newInput = [...userInput];
        newInput[index] = value;
        setUserInput(newInput);
    };

    const submitWord = () => {
        const word = userInput.join('').toLowerCase();
        console.log('Submitted Word:', word);
        console.log('Selected Word:', selectedWord);
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


    return (
        <div className="center-container">
            <div className="word-input">
                {userInput.map((value, index) => (
                    <div
                        key={index}
                    >
                        <input
                            type="text"
                            maxLength="1"
                            value={value}
                            className={`input-block ${feedback[index]}`}
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

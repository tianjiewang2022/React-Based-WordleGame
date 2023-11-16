import React, { useState, useEffect } from 'react';


import './game.css'; // Create a separate CSS file for styling

const Game = ({ words, wordLength, attemptLimit }) => {
    const [userInput, setUserInput] = useState(Array(wordLength).fill(''));
    const [selectedWord, setSelectedWord] = useState('');
    const [feedback, setFeedback] = useState(Array(wordLength).fill(''));
    const [attempts, setAttempts] = useState(0);
    const [showCongratulations, setShowCongratulations] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        resetGame();
    }, []); // Initial reset when the component mounts

    useEffect(() => {
        if (attempts > attemptLimit) {
            resetGame();
        }
    }, [attempts]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setSelectedWord(words[randomIndex]);
    }, []);

    const resetGame = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setSelectedWord(words[randomIndex]);
        setUserInput(Array(wordLength).fill(''));
        setFeedback(Array(wordLength).fill(''));
        setAttempts(0);
        setShowCongratulations(false);
        setErrorMessage('');
    };

    const handleInputChange = (index, value) => {
        const newInput = [...userInput];
        newInput[index] = value;
        setUserInput(newInput);
    };

    const submitWord = () => {
        const word = userInput.join('').toLowerCase();
        setAttempts(attempts + 1);
        console.log('Submitted Word:', word);
        console.log('Selected Word:', selectedWord);
        console.log(attempts);
        // Validate the length of the submitted word
        if (word.length < wordLength) {
            setErrorMessage(`The word you inputted is too short. Please input ${wordLength} characters.`);
            return;
        }


        // Clear the error message if there was one
        setErrorMessage('');


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

        if (word === selectedWord && attempts < attemptLimit) {
            setShowCongratulations(true);
        }
    };

    return (

        <div className="center-container">
            <p>Remaining attempts: {attemptLimit - attempts}</p>
            <div className="word-input">
                {userInput.map((value, index) => (
                    <div key={index}>
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
                {showCongratulations ? (
                    <div>
                        <span role="img" aria-label="celebration" style={{ color: 'red' }}>
                            🎉
                        </span>
                        <p>Congratulations! Would you like to try again?
                        </p>
                        <button className="navigation-button" onClick={resetGame}>
                            Try Again
                        </button>
                    </div>
                ) : (
                    <>
                        <button className="navigation-button" onClick={submitWord}>
                            Submit
                        </button>
                        <button className="navigation-button" onClick={resetGame}>
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

            {attempts >= attemptLimit && (
                <div>
                    <p>
                        Game Over! The correct answer was: <strong>{selectedWord}</strong>
                    </p>
                    <button className="navigation-button" onClick={resetGame}>
                        Try Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default Game;

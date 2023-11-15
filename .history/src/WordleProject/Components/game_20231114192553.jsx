import React, { useState, useEffect } from 'react';


import './game.css'; // Create a separate CSS file for styling

const Game = ({ words, wordLength, attemptLimit }) => {
    const [userInput, setUserInput] = useState(Array(wordLength).fill(''));
    const [selectedWord, setSelectedWord] = useState('');
    const [feedback, setFeedback] = useState(Array(wordLength).fill(''));
    const [attempts, setAttempts] = useState(0);
    const [showCongratulations, setShowCongratulations] = useState(false);

    useEffect(() => {
        resetGame();
    }, []); // Initial reset when the component mounts

    useEffect(() => {
        if (attempts > attemptLimit) {
            alert('Game Over! Would you like to reset the game?');
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
    };

    const handleInputChange = (index, value) => {
        const newInput = [...userInput];
        newInput[index] = value;
        setUserInput(newInput);
    };

    const submitWord = () => {
        const word = userInput.join('').toLowerCase();
        setAttempts(attempts + 1);
        if (word.length < wordLength) {
            alert(`Word is too short. Please submit a ${wordLength}-letter word.`);
            return;
        }
        console.log('Submitted Word:', word);
        console.log('Selected Word:', selectedWord);
        console.log(attempts);


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
                        <div>
                            Congratulations! Would you like to try again?
                            <span role="img" aria-label="celebration" style={{ color: 'red' }}>
                                🎉
                            </span>
                            <button className="navigation-button" onClick={resetGame}>
                                Try Again
                            </button>
                        </div>
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

            {attempts >= attemptLimit && (
                <p>
                    Game Over! The correct answer was: <strong>{selectedWord}</strong>
                </p>
            )}
        </div>
    );
};

export default Game;

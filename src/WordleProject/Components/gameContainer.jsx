// GameContainer.js
import React, { useState, useEffect } from 'react';
import Game from './renderGamePage';
import { useUserContext } from '../../Login/useContext';

// eslint-disable-next-line react/prop-types
const GameContainer = ({ words, wordLength, attemptLimit }) => {
    const [userInput, setUserInput] = useState(Array(wordLength).fill(''));
    const [selectedWord, setSelectedWord] = useState('');
    const [feedback, setFeedback] = useState(Array(wordLength).fill(''));
    const [attempts, setAttempts] = useState(0);
    const [showCongratulations, setShowCongratulations] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { setScore } = useUserContext();


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
        console.log(selectedWord);
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
            setScore((prevScore) => prevScore + 1);
        }
    };

    return (
        <Game
            userInput={userInput}
            feedback={feedback}
            attempts={attempts}
            showCongratulations={showCongratulations}
            errorMessage={errorMessage}
            onInputChange={handleInputChange}
            onSubmitWord={submitWord}
            onResetGame={resetGame}
            remainingAttempts={attemptLimit - attempts}
            selectedWord={selectedWord}
        />
    );
};

export default GameContainer;

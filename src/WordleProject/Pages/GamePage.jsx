import Modal from "../Components/Modal";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { UserProvider, useUserContext } from '../../Login/useContext';


function GamePage() {
    const [showModal, setShowModal] = useState(false);
    const { username, score } = useUserContext(); // Access the username from the context

    const handleClick = () => {
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
    };
    const actionBar = (
        <div>
            <button onClick={handleClose}>
                I Accept
            </button>
        </div>
    )

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <div>How To Play</div>
            <div>For Normal: </div>
            <div>    Guess the Wordle in 6 tries.</div>
            <div>    Each guess must be a valid 6-letter word.</div>
            <div>    The color of the tiles will change to show how close your guess was to the word.
            </div>
            <></>
            <div>For Hard: </div>
            <div>    Guess the Wordle in 5 tries.</div>
            <div>    Each guess must be a valid 7-letter word.</div>
            <div>    The color of the tiles will change to show how close your guess was to the word.
            </div>
        </Modal>
    )

    return (
        <UserProvider>
            <div className="app-container">
                <h2 className="app-title">Welcome to Wordle Game, {username}!</h2>
                <h2 className="app-title"> your score: {score} 🎉</h2>
                <p className="app-description">Click the buttons to choose difficulty ʕ •ᴥ•ʔ</p>
                <div className="button-container">

                    <Link
                        to="./Normal"
                        className="navigation-link"
                    >
                        <button className="navigation-button">Normal</button>
                    </Link>

                    <Link
                        to="./Hard"
                        className="navigation-link"
                    >
                        <button className="navigation-button">Hard</button>
                    </Link>
                </div>
                <div className="center-container">
                    <button className="navigation-button-rolewindow" onClick={handleClick}>
                        Game Rules
                    </button>
                    {showModal && modal}
                </div>
            </div>
        </UserProvider>
    );
}

export default GamePage;

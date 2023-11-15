import Modal from "../Components/Modal";
import { Link } from "react-router-dom";
import { useState } from "react";


function App() {
    const [showModal, setShowModal] = useState(false);

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
            <div>
                How To Play</div>
            <div>    Guess the Wordle in 6 tries.</div>
            <div>    Each guess must be a valid 5-letter word.</div>
            <div>    The color of the tiles will change to show how close your guess was to the word.
            </div>
        </Modal>
    )

    return (
        <div className="app-container">
            <h2 className="app-title">Welcome to Wordle Game!</h2>
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

    );
}

export default App;

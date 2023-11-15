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
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>
    );



    return (
        < div >
            <button onClick={handleClick}>
                Open Modal
            </button>
            {showModal && modal}
            <div className="app-container">
                <h2 className="app-title">Welcome to Wordle Game!</h2>
                <p className="app-description">Click the buttons to navigate ʕ •ᴥ•ʔ</p>
                <div className="button-container">
                    <Link
                        to="/GamePage"
                        className="navigation-link"
                    >
                        <button className="navigation-button">Medium</button>
                    </Link>
                    <Link
                        to="/GamePage"
                        className="navigation-link"

                    >
                        <button className="navigation-button">Hard</button>
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default App;

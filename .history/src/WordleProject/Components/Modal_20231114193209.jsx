import ReactDOM from "react-dom";
import { useEffect } from "react";
import './rolewindow.css';

function Modal({ onClose, children, actionBar }) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-close" onClick={onClose}>&times;</div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-action-bar">
                    {actionBar}
                </div>
            </div>
        </div>,
        document.getElementById("modal-container")
    );
}

export default Modal;
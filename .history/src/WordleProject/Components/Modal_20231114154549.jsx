import ReactDOM from "react-dom";
import { useEffect } from "react";
import './'
function Modal({ onClose, children, actionBar }) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    // return ReactDOM.createPortal(
    //     <>
    //         <div
    //             onClick={onClose}
    //             className="fixed inset-0 bg-gray-300 opacity-80"
    //         ></div>
    //         <div className="fixed inset-40 p-10 bg-white">
    //             <div className="flex flex-col justify-between h-full">{children}</div>
    //             <div className="flex justify-end">
    //                 {actionBar}
    //             </div>
    //         </div>
    //     </>,
    //     document.getElementById("modal-container")
    // );
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
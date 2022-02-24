import React from "react";

import './Modal.css';

const Modal = (props) => {

    return (
        <React.Fragment>
            <div className="backdrop" onClick={props.onConfirm}/>
            <div className="modal-style">
                <header>
                    <h1 className="modal-header">{props.title}</h1>
                </header>
                <div>
                    <p>{props.message}</p>
                </div>
                <footer>
                    <button className="modal-button" onClick={props.onConfirm}>Okay</button>
                </footer>
            </div>
        </React.Fragment>
    );
}

export default Modal;
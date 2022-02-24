import React from "react";

import './Modal.css';
import Button from './Button';

const Modal = (props) => {

    return (
        <div>
        <div className="backdrop" />
        <div className="modal-style">
            <header>
                <h1 className="modal-header">{props.title}</h1>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <button className="modal-button">Okay</button>
            </footer>
        </div>
        </div>
    );
}

export default Modal;
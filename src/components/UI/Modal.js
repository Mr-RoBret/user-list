import React from "react";

import './Modal.css';
import Button from './Button';

const Modal = (props) => {

    return (
        <div className="modal-style">
            <header>
                <h1 className="modal-header">{props.title}</h1>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <Button>Okay</Button>
            </footer>
        </div>
    );
}

export default Modal;
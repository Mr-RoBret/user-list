import React from "react";

import './Button.css';

const Button = (props) => {

    return <button className="add-user-btn" onClick={props.onClick}>Add User</button>
}

export default Button;
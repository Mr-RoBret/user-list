import React from "react";

import './SingleUser.css';

const SingleUser = (props) => {
    return (
        <div className="user-info-box">
            <li>
                {props.name} ({props.age} years old)
            </li>
        </div>
    );
};

export default SingleUser;
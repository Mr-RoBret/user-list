import React from "react";

import './SingleUser.css';

const SingleUser = (props) => {
    return (
        <div className="user-info-box">
            {props.name} ({props.age} years old)
        </div>
    );
};

export default SingleUser;
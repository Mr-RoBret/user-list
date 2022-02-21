import React from "react";

import './SingleUser.css';

const SingleUser = (props) => {
    return (
        <div className="user-module">
            <div className="user-info-box">
                {`${props.name} ${props.year}`};
            </div>
        </div>
    );
};

export default SingleUser;
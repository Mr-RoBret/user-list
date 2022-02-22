import React from "react";

import './UserList.css';
import SingleUser from './SingleUser';

const UserList = ((props) => {
    return (
        <div className="user-list-module">
            <ul>
                {props.userList.map((user) => (
                    <SingleUser name={user.name} age={user.age} />
                ))}
            </ul>
        </div>
    );
});

export default UserList;
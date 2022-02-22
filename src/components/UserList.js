import React from "react";

import './UserList.css';
import SingleUser from './SingleUser';

const UserList = ((props) => {
    return (
        <div className="user-list-module">
            <ul className="user-style">
                {props.userList.map((user) => (
                    <li key={props.id}>
                        <SingleUser name={user.name} age={user.age} />
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default UserList;
import React from "react";

import './UserList.css';

const UserList = ((props) => {

    const userList = props.userList.map((user) => {
       return ( 
            <li>
                <singleUser name={user.name} age={user.age} />
            </li>
        )    
    });

    return (
        <div className="user-list-module">
            <ul>
                {userList}
            </ul>
        </div>
    );
});

export default UserList;
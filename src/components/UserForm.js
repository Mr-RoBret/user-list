import React from "react";

import './UserForm.css';
import Button from './UI/Button';
import SingleUser from './SingleUser';

const UserForm = props => {

    const handleNewUser = (user) => {
        let name = user.name;
        let age = user.age;

        <SingleUser userName={name} userAge={age} />
    }

    return (
        <form>
            <div className="user-module">
                <div className="user-inputs">
                    <div className="user-input">
                        <label className="user-input__control">Username</label>
                        <input type="text" className="user-input__control"/>
                    </div>
                    <div className="user-input">
                        <label className="user-input__control">Age (Years)</label>
                        <input type="text" className="user-input__control"/>
                    </div>
                    <div className="user-input">
                        <Button onClick={handleNewUser}/>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UserForm;
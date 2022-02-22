import React, { useState } from "react";

import './UserForm.css';
import Button from './UI/Button';

const UserForm = (props) => {

    const [userInput, setUserInput] = useState({
        enteredUser: '',
        enteredAge: '',
    });

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userInput.enteredUser);
        console.log(userInput.enteredAge);

        if (userInput.enteredUser.trim().length === 0 || userInput.enteredAge.trim().length === 0) {
            return;
        }
        if (+userInput.enteredAge < 1) {
            return;
        }
        props.onAddUser(userInput.enteredUser, userInput.enteredAge);
        setUserInput({
            enteredUser: '',
            enteredAge: '',
        });
    }

    const handleUserName = (event) => {
        setUserInput((prevState) => {
            return { ...prevState,
            enteredUser: event.target.value };
        });
    };
    
    const handleUserAge = (event) => {
        setUserInput((prevState) => {
            return { ...prevState,
            enteredAge: event.target.value };
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="user-module">
                <div className="user-inputs">
                    <div className="user-input">
                        <label htmlFor="user name" className="user-input__control">Username</label>
                        <input type="text" value={userInput.enteredUser} className="user-input__control" onChange={handleUserName}/>
                    </div>
                    <div className="user-input">
                        <label htmlFor="age" className="user-input__control">Age (Years)</label>
                        <input type="text" value={userInput.enteredAge} className="user-input__control" onChange={handleUserAge} />
                    </div>
                    <div className="user-input">
                        <Button type="submit" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default UserForm;


    // const handleNewUser = (user) => {
    //     let name = user.name;
    //     let age = user.age;

    //     <SingleUser userName={name} userAge={age} />
    // }
    